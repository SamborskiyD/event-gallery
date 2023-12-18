import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

describe("Footer", () => {
  test("Footer should render correctly", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /event gallery/i })).toBeDefined();

    expect(screen.getAllByRole("listitem")).toBeDefined();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);

    expect(screen.getAllByRole("link", { name: "icon" })).toBeDefined();
    expect(screen.getAllByRole("link", { name: "icon" })).toHaveLength(3);
  });

  test("Footer links should render with correct href", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /event gallery/i }).href).toEqual(
      "http://localhost:3000/"
    );

    screen
      .getAllByRole("link", { name: "icon" })
      .forEach((link) => expect(link.href).toEqual("http://localhost:3000/#"));
  });
});
