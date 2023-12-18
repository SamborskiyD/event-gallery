import { expect, test, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "../components/Header";
import { useSession } from "next-auth/react";

vi.mock("next-auth/react");

describe("Header", () => {
  test("Header should render correctly when user is loged in", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /event gallery/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /log in/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /sign up/i })).toBeDefined();

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});