/**
 * @jest-environment node
 */
import { POST } from "@/app/api/send-email/route";

// ── Nodemailer mock ──────────────────────────────────────────────────────────
const mockSendMail = jest.fn();
jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => ({ sendMail: mockSendMail })),
}));

// ── Env mock — provides consistent owner credentials across all tests ─────────
jest.mock("@/lib/env", () => ({
  getServerEnv: jest.fn(() => ({
    email: "owner@example.com",
    emailPass: "test-pass",
  })),
}));

// ── Helpers ──────────────────────────────────────────────────────────────────
// Each test gets a unique IP so the module-level rateLimitMap never blocks unrelated tests
let ipCounter = 1;
const nextIp = () => `203.0.113.${ipCounter++}`;

const makeRequest = (body: unknown, ip = nextIp()) =>
  new Request("http://localhost/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });

const validBody = {
  name: "Jean Mosquera",
  email: "jean@example.com",
  message: "Hello, this is a test message.",
};

// ── Tests ────────────────────────────────────────────────────────────────────
describe("POST /api/send-email", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSendMail.mockResolvedValue({});
  });

  // ── Happy path ──
  it("returns 200 and sends an email for a valid payload", async () => {
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(200);
    expect(mockSendMail).toHaveBeenCalledTimes(1);
  });

  it("sends the email to the owner address (from getServerEnv)", async () => {
    await POST(makeRequest(validBody));
    expect(mockSendMail).toHaveBeenCalledWith(
      expect.objectContaining({ to: "owner@example.com" }),
    );
  });

  it("sets replyTo to the sender's email address", async () => {
    await POST(makeRequest(validBody));
    expect(mockSendMail).toHaveBeenCalledWith(
      expect.objectContaining({ replyTo: "jean@example.com" }),
    );
  });

  // ── Input validation ──
  it("returns 400 when name is missing", async () => {
    const res = await POST(makeRequest({ ...validBody, name: "" }));
    expect(res.status).toBe(400);
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  it("returns 400 when email is invalid", async () => {
    const res = await POST(
      makeRequest({ ...validBody, email: "not-an-email" }),
    );
    expect(res.status).toBe(400);
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  it("returns 400 when message is shorter than 5 characters", async () => {
    const res = await POST(makeRequest({ ...validBody, message: "Hi" }));
    expect(res.status).toBe(400);
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  it("returns 400 for a non-JSON body", async () => {
    const req = new Request("http://localhost/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "1.2.3.4",
      },
      body: "this is not json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when a field is not a string (type confusion)", async () => {
    const res = await POST(
      makeRequest({
        name: 123,
        email: "jean@example.com",
        message: "Hello there",
      }),
    );
    expect(res.status).toBe(400);
  });

  // ── HTML sanitization ──
  it("escapes HTML special characters in the email body", async () => {
    await POST(
      makeRequest({
        ...validBody,
        name: '<script>alert("xss")</script>',
        message: "Message with <b>bold</b> & 'quotes'",
      }),
    );
    const html: string = mockSendMail.mock.calls[0][0].html;
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&amp;");
    expect(html).toContain("&#039;");
  });

  it("truncates name to 100 characters", async () => {
    const longName = "A".repeat(200);
    await POST(makeRequest({ ...validBody, name: longName }));
    const html: string = mockSendMail.mock.calls[0][0].html;
    // The name in the html should be at most 100 chars (before escaping)
    const nameMatch = html.match(/<strong>Name:<\/strong> ([^<]+)/);
    expect(nameMatch?.[1].length).toBeLessThanOrEqual(100);
  });

  // ── Rate limiting ──
  it("returns 429 after exceeding 3 requests from the same IP", async () => {
    const ip = "10.0.0.1";
    for (let i = 0; i < 3; i++) {
      await POST(makeRequest(validBody, ip));
    }
    const res = await POST(makeRequest(validBody, ip));
    expect(res.status).toBe(429);
    expect(mockSendMail).toHaveBeenCalledTimes(3); // only the first 3 went through
  });

  it("allows requests from different IPs independently", async () => {
    for (let i = 0; i < 3; i++) {
      await POST(makeRequest(validBody, `192.168.1.${i + 10}`));
    }
    // This is a new IP — should not be rate limited
    const res = await POST(makeRequest(validBody, "192.168.1.99"));
    expect(res.status).toBe(200);
  });

  // ── Nodemailer failure ──
  it("returns 500 when nodemailer throws", async () => {
    mockSendMail.mockRejectedValue(new Error("SMTP error"));
    const res = await POST(makeRequest(validBody));
    expect(res.status).toBe(500);
  });

  it("does not expose internal error details to the client on failure", async () => {
    mockSendMail.mockRejectedValue(new Error("Secret SMTP credentials"));
    const res = await POST(makeRequest(validBody));
    const body = await res.json();
    expect(JSON.stringify(body)).not.toContain("Secret SMTP credentials");
  });

  // ── Edge cases ──
  it("uses 'unknown' as IP when x-forwarded-for header is absent", async () => {
    const req = new Request("http://localhost/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validBody),
    });
    const res = await POST(req);
    // Should proceed normally — 'unknown' is a valid key in the rate limit map
    expect(res.status).toBe(200);
  });

  it("resets the rate limit count after the window expires", async () => {
    const ip = "10.0.2.1";
    // Fill up the rate limit window
    for (let i = 0; i < 3; i++) {
      await POST(makeRequest(validBody, ip));
    }
    // Advance Date.now() past the 10-minute window
    jest.spyOn(Date, "now").mockReturnValue(Date.now() + 11 * 60 * 1000);
    const res = await POST(makeRequest(validBody, ip));
    expect(res.status).toBe(200);
    jest.restoreAllMocks();
  });
});
