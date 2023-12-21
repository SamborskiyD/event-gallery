import { expect, test, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "../components/Header";
import { useSession } from "next-auth/react";

vi.mock("next-auth/react", () => {
  const originalModule = vi.importActual("next-auth/react");
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "admin" },
  };
  return {
    ...originalModule,
    useSession: vi.fn(() => {
      return { data: mockSession, status: "authenticated" };
    }),
  };
});

describe("Header", () => {
  test("Header should render correctly when user is loged in", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /tickets/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /log out/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /profile/i })).toBeDefined();

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
