import React from "react";
import { render, screen, act } from "@testing-library/react";
import NavigationDots from "./navigation-dots";

// Per-observer callback capture so we can simulate specific sections becoming visible
let observerCallbacks: Array<
  (entries: Partial<IntersectionObserverEntry>[]) => void
> = [];
let mockDisconnect: jest.Mock;
let mockObserve: jest.Mock;

beforeEach(() => {
  observerCallbacks = [];
  mockDisconnect = jest.fn();
  mockObserve = jest.fn();
  (window.IntersectionObserver as jest.Mock).mockImplementation((callback) => {
    observerCallbacks.push(callback);
    return {
      observe: mockObserve,
      unobserve: jest.fn(),
      disconnect: mockDisconnect,
    };
  });
});

// Creates real DOM section elements so getElementById() finds them
function mountSections(
  ids = ["home", "about", "work-experience", "projects", "contacts"],
) {
  const elements = ids.map((id) => {
    const el = document.createElement("section");
    el.id = id;
    document.body.appendChild(el);
    return el;
  });
  return () => elements.forEach((el) => el.remove());
}

describe("NavigationDots — rendering", () => {
  it("renders a navigation landmark with the correct aria-label", () => {
    render(<NavigationDots />);
    expect(
      screen.getByRole("navigation", { name: /page sections navigation/i }),
    ).toBeInTheDocument();
  });

  it("renders exactly one dot per section", () => {
    render(<NavigationDots />);
    expect(screen.getAllByRole("link")).toHaveLength(5);
  });

  it("renders each dot with a valid anchor href", () => {
    render(<NavigationDots />);
    const expected = [
      "#home",
      "#about",
      "#work-experience",
      "#projects",
      "#contacts",
    ];
    screen.getAllByRole("link").forEach((link, i) => {
      expect(link).toHaveAttribute("href", expected[i]);
    });
  });

  it("gives each dot a descriptive aria-label", () => {
    render(<NavigationDots />);
    expect(
      screen.getByLabelText(/navigate to home section/i),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/navigate to contacts section/i),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/navigate to work experience section/i),
    ).toBeInTheDocument();
  });

  it("marks 'home' as the active dot by default", () => {
    render(<NavigationDots />);
    const homeLink = screen.getByLabelText(/navigate to home section/i);
    expect(homeLink.className).toMatch(/bg-primary/);
  });

  it("does not apply active styles to non-active dots", () => {
    render(<NavigationDots />);
    const aboutLink = screen.getByLabelText(/navigate to about section/i);
    expect(aboutLink.className).not.toMatch(/scale-125/);
  });
});

describe("NavigationDots — IntersectionObserver setup", () => {
  it("does not create any observers when no section elements exist in the DOM", () => {
    render(<NavigationDots />);
    expect(mockObserve).not.toHaveBeenCalled();
  });

  it("creates one observer for each existing section element", () => {
    const cleanup = mountSections();
    render(<NavigationDots />);
    expect(mockObserve).toHaveBeenCalledTimes(5);
    cleanup();
  });

  it("skips sections that are not in the DOM", () => {
    const cleanup = mountSections(["home", "about"]); // only 2 of 5
    render(<NavigationDots />);
    expect(mockObserve).toHaveBeenCalledTimes(2);
    cleanup();
  });
});

describe("NavigationDots — active state tracking", () => {
  it("activates 'about' when its observer fires with isIntersecting=true", () => {
    const cleanup = mountSections();
    render(<NavigationDots />);

    // Observers are created in section order; "about" is index 1
    act(() => {
      observerCallbacks[1]([
        { isIntersecting: true } as IntersectionObserverEntry,
      ]);
    });

    expect(
      screen.getByLabelText(/navigate to about section/i).className,
    ).toMatch(/bg-primary/);
    expect(
      screen.getByLabelText(/navigate to home section/i).className,
    ).not.toMatch(/scale-125/);
    cleanup();
  });

  it("does not change active state when isIntersecting=false", () => {
    const cleanup = mountSections();
    render(<NavigationDots />);

    act(() => {
      observerCallbacks[1]([
        { isIntersecting: false } as IntersectionObserverEntry,
      ]);
    });

    // Home should still be active
    expect(
      screen.getByLabelText(/navigate to home section/i).className,
    ).toMatch(/bg-primary/);
    cleanup();
  });

  it("transitions active state across multiple sections", () => {
    const cleanup = mountSections();
    render(<NavigationDots />);

    act(() => {
      observerCallbacks[3]([
        { isIntersecting: true } as IntersectionObserverEntry,
      ]); // "projects"
    });
    expect(
      screen.getByLabelText(/navigate to projects section/i).className,
    ).toMatch(/bg-primary/);

    act(() => {
      observerCallbacks[4]([
        { isIntersecting: true } as IntersectionObserverEntry,
      ]); // "contacts"
    });
    expect(
      screen.getByLabelText(/navigate to contacts section/i).className,
    ).toMatch(/bg-primary/);
    cleanup();
  });
});

describe("NavigationDots — cleanup", () => {
  it("disconnects all observers when the component unmounts", () => {
    const cleanup = mountSections();
    const { unmount } = render(<NavigationDots />);
    unmount();
    expect(mockDisconnect).toHaveBeenCalledTimes(5);
    cleanup();
  });
});
