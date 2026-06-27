/**
 * Server-side environment variable validation.
 * Call getServerEnv() from API routes and Server Actions — never from client code.
 * Throws at request-time (not build-time) if any required variable is missing,
 * so misconfiguration surfaces immediately instead of producing silent failures.
 */

interface ServerEnv {
  email: string;
  emailPass: string;
}

let cached: ServerEnv | null = null;

export function getServerEnv(): ServerEnv {
  if (cached) return cached;

  const email = process.env.EMAIL;
  const emailPass = process.env.PASS;

  if (!email || !emailPass) {
    throw new Error(
      "Missing required server environment variables.\n" +
        "Set EMAIL and PASS in your .env.local file.\n" +
        "See .env.example for reference.",
    );
  }

  cached = { email, emailPass };
  return cached;
}
