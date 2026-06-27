import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import Contacts from "./contacts";

jest.mock("sonner", () => ({ toast: jest.fn() }));

const fillForm = async (
  user: ReturnType<typeof userEvent.setup>,
  overrides: Partial<{ name: string; email: string; message: string }> = {},
) => {
  const values = {
    name: "Jean Mosquera",
    email: "jean@example.com",
    message: "Hello, this is a test message.",
    ...overrides,
  };
  await user.type(screen.getByLabelText(/your name/i), values.name);
  await user.type(screen.getByLabelText(/your email/i), values.email);
  await user.type(screen.getByLabelText(/your message/i), values.message);
  return values;
};

describe("Contacts — form rendering", () => {
  it("renders name, email, and message fields", () => {
    render(<Contacts />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
  });

  it("renders Send Message and Reset buttons", () => {
    render(<Contacts />);
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Contacts />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });
});

describe("Contacts — client-side validation", () => {
  it("shows an error when name is empty on submit", async () => {
    const { container } = render(<Contacts />);
    // fireEvent.submit bypasses HTML5 constraint validation so our JS validateForm() runs
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
  });

  it("shows an error for an invalid email format", async () => {
    const user = userEvent.setup();
    const { container } = render(<Contacts />);
    await user.type(screen.getByLabelText(/your name/i), "Jean");
    await user.type(screen.getByLabelText(/your email/i), "not-an-email");
    await user.type(screen.getByLabelText(/your message/i), "Hello there");
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });

  it("shows an error when message is too short", async () => {
    const user = userEvent.setup();
    render(<Contacts />);
    await user.type(screen.getByLabelText(/your name/i), "Jean");
    await user.type(screen.getByLabelText(/your email/i), "jean@example.com");
    await user.type(screen.getByLabelText(/your message/i), "Hi");
    await user.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      await screen.findByText(/at least 5 characters/i),
    ).toBeInTheDocument();
  });

  it("clears a field error as soon as the user starts typing", async () => {
    const user = userEvent.setup();
    const { container } = render(<Contacts />);
    fireEvent.submit(container.querySelector("form")!);
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    await user.type(screen.getByLabelText(/your name/i), "J");
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
  });
});

describe("Contacts — form submission", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows a spinner and disables the button while submitting", async () => {
    global.fetch = jest.fn(() => new Promise(() => {})) as jest.Mock; // never resolves
    const user = userEvent.setup();
    render(<Contacts />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    const btn = screen.getByRole("button", { name: /sending/i });
    expect(btn).toBeDisabled();
  });

  it("shows success toast and resets the form on successful submission", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true }) as jest.Mock;
    const user = userEvent.setup();
    render(<Contacts />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        "Email sent!",
        expect.objectContaining({
          description: expect.stringContaining("get back"),
        }),
      );
    });
    expect(screen.getByLabelText(/your name/i)).toHaveValue("");
    expect(screen.getByLabelText(/your email/i)).toHaveValue("");
    expect(screen.getByLabelText(/your message/i)).toHaveValue("");
  });

  it("shows error toast when the server returns a non-ok response", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false }) as jest.Mock;
    const user = userEvent.setup();
    render(<Contacts />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        "Oops!",
        expect.objectContaining({
          description: expect.stringContaining("wrong"),
        }),
      );
    });
  });

  it("shows error toast when fetch throws a network error", async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValue(new Error("Network error")) as jest.Mock;
    const user = userEvent.setup();
    render(<Contacts />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith("Oops!", expect.any(Object));
    });
  });
});

describe("Contacts — CV download", () => {
  it("fires a toast notification when Download CV is clicked", async () => {
    const user = userEvent.setup();
    render(<Contacts />);
    // The CV download button is an <a> rendered via Button asChild
    const cvLink = screen.getByRole("link", { name: /download cv/i });
    await user.click(cvLink);
    expect(toast).toHaveBeenCalledWith(
      "Download started",
      expect.objectContaining({ description: "Check your download folder" }),
    );
  });
});

describe("Contacts — Reset button", () => {
  it("clears all fields and errors when Reset is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<Contacts />);
    await user.type(screen.getByLabelText(/your name/i), "Jean");
    fireEvent.submit(container.querySelector("form")!);
    await screen.findByText(/email is required/i);

    await user.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByLabelText(/your name/i)).toHaveValue("");
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
});
