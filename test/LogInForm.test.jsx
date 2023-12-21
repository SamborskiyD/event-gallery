import { expect, test, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LogInForm from "../components/LogInForm";

vi.mock("next/navigation");
vi.mock("next-auth/react");

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("Log in Form", () => {
  const mockLoginUser = vi.fn((email, password) => {
    return Promise.resolve({ email: email, password: password });
  });

  test("Log in Form should render correctly", () => {
    const { user } = setup(<LogInForm />);

    expect(screen.getByRole("textbox", { name: "Email" })).toBeDefined();
    expect(screen.getByRole("password", { name: "Password" })).toBeDefined();

    expect(screen.getByRole("button", { name: "Log In" })).toBeDefined();
  });

  test("Log in Form should validate empty form filds", async () => {
    const { user } = setup(<LogInForm registerUser={mockLoginUser} />);

    await user.click(screen.getByRole("button", { name: "Log In" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(2);
    expect(mockLoginUser).not.toBeCalled();
  });

  test("Log in Form should validate email", async () => {
    const { user } = setup(<LogInForm registerUser={mockLoginUser} />);

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "email@gmail.com"
    );

    await user.click(screen.getByRole("button", { name: "Log In" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockLoginUser).not.toBeCalled();
  });

  test("Log in Form should validate passwords", async () => {
    const { user } = setup(<LogInForm registerUser={mockLoginUser} />);

    await user.type(
      screen.getByRole("password", { name: "Password" }),
      "1234qwerty"
    );

    await user.click(screen.getByRole("button", { name: "Log In" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockLoginUser).not.toBeCalled();
  });

  test("Log in Form should call submit function", async () => {
    const { user } = setup(<LogInForm registerUser={mockLoginUser} />);

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "email@gmail.com"
    );
    await user.type(
      screen.getByRole("password", { name: "Password" }),
      "1234qwerty"
    );

    await user.click(screen.getByRole("button", { name: "Log In" }));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
  });
});
