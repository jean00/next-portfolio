import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "sonner";
import Hero from "./hero";

jest.mock("sonner", () => ({ toast: jest.fn() }));

// next/image stub
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

describe("Hero", () => {
  it("renders the heading with the developer name", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jean");
  });

  it("renders the 'Frontend developer' subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /frontend developer/i }),
    ).toBeInTheDocument();
  });

  it("renders all main tech badges", () => {
    render(<Hero />);
    ["React", "TypeScript", "Next.js", "Tailwind CSS"].forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("renders the Download CV link with correct href", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /download cv/i });
    expect(link).toHaveAttribute(
      "href",
      "/Jean_Louis_Mosquera_Escobar_Frontend_Engineer.pdf",
    );
    expect(link).toHaveAttribute("download");
  });

  it("fires a toast notification when Download CV is clicked", () => {
    render(<Hero />);
    fireEvent.click(screen.getByRole("link", { name: /download cv/i }));
    expect(toast).toHaveBeenCalledWith(
      "Download started",
      expect.objectContaining({ description: "Check your download folder" }),
    );
  });
});
