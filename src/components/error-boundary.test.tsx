import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./error-boundary";

// Suppress expected React error boundary console.error calls
beforeAll(() => jest.spyOn(console, "error").mockImplementation(() => {}));
afterAll(() => (console.error as jest.Mock).mockRestore());

// A component that unconditionally throws
const Bomb = ({ message = "Test error" }: { message?: string }) => {
  throw new Error(message);
  return null;
};

describe("ErrorBoundary — normal rendering", () => {
  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <span>Safe content</span>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Safe content")).toBeInTheDocument();
  });
});

describe("ErrorBoundary — error caught, default UI", () => {
  it("shows the default error heading when a child throws", () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("renders a 'Refresh Page' button in the default error UI", () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(
      screen.getByRole("button", { name: /refresh page/i }),
    ).toBeInTheDocument();
  });

  it("does not render the children after a throw", () => {
    render(
      <ErrorBoundary>
        <Bomb />
        <span>Should not appear</span>
      </ErrorBoundary>,
    );
    expect(screen.queryByText("Should not appear")).not.toBeInTheDocument();
  });
});

describe("ErrorBoundary — custom fallback", () => {
  it("renders the fallback prop instead of the default UI", () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(screen.getByText("Custom fallback")).toBeInTheDocument();
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });

  it("does not render the Refresh Page button when a fallback is provided", () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <Bomb />
      </ErrorBoundary>,
    );
    expect(
      screen.queryByRole("button", { name: /refresh page/i }),
    ).not.toBeInTheDocument();
  });
});

describe("ErrorBoundary — dev error details", () => {
  it("hides error details outside development mode (NODE_ENV=test)", () => {
    render(
      <ErrorBoundary>
        <Bomb message="secret-stack-trace" />
      </ErrorBoundary>,
    );
    // The <details> block with error info is only shown in NODE_ENV=development
    expect(screen.queryByText(/secret-stack-trace/i)).not.toBeInTheDocument();
  });

  it("shows error details when NODE_ENV is development", () => {
    const original = process.env.NODE_ENV;
    Object.defineProperty(process.env, "NODE_ENV", {
      value: "development",
      configurable: true,
    });

    render(
      <ErrorBoundary>
        <Bomb message="dev-only-message" />
      </ErrorBoundary>,
    );
    expect(screen.getByText(/dev-only-message/i)).toBeInTheDocument();

    Object.defineProperty(process.env, "NODE_ENV", {
      value: original,
      configurable: true,
    });
  });
});
