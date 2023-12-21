import { expect, test, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";

import SignUpForm from "../components/SignUpForm";

vi.mock('next/navigation')

function setup(jsx) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

describe("Sign up Form", () => {
  const mockRegisterUser = vi.fn((firstName, lastName, email, password, role) => {
    return Promise.resolve({firstName: firstName, lastName: lastName, email: email, password: password, role: role})
  });

  test("Sign up Form should render correctly", () => {
    const { user } = setup(<SignUpForm />);

    expect(screen.getByRole("textbox", { name: "First Name" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Last Name" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeDefined();
    expect(screen.getByRole("password", { name: "Password" })).toBeDefined();
    expect(screen.getByRole('combobox', {name: "Role"})).toBeDefined()
    expect(
      screen.getByRole("password", { name: "Confirm Password" })
    ).toBeDefined();

    expect(screen.getByRole("button", { name: "Sign Up" })).toBeDefined();
  });

  test("Sign up Form should validate empty form filds", async () => {
    const { user } = setup(<SignUpForm registerUser={mockRegisterUser} />);

    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(6);
    expect(mockRegisterUser).not.toBeCalled();
  });

  test("Sign up Form should validate First Name and Last Name", async () => {
    const { user } = setup(<SignUpForm registerUser={mockRegisterUser} />);

    await user.type(
      screen.getByRole("textbox", { name: "First Name" }),
      "Dmytro"
    );
    await user.type(
      screen.getByRole("textbox", { name: "Last Name" }),
      "Samborskyi"
    );

    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(4);
    expect(mockRegisterUser).not.toBeCalled();
  });

  test("Sign up Form should validate email", async () => {
    const { user } = setup(<SignUpForm registerUser={mockRegisterUser} />);

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "email@gmail.com"
    );

    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(5);
    expect(mockRegisterUser).not.toBeCalled();
  });

  test("Sign up Form should validate passwords", async () => {
    const { user } = setup(<SignUpForm registerUser={mockRegisterUser} />);

    await user.type(
      screen.getByRole("password", { name: "Password" }),
      "1234qwerty"
    );
    await user.type(
      screen.getByRole("password", { name: "Confirm Password" }),
      "1234qwerty"
    );

    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(4);
    expect(mockRegisterUser).not.toBeCalled();
  });

  test("Sign up Form should call submit function", async () => {
    const { user } = setup(<SignUpForm registerUser={mockRegisterUser} />);

    await user.type(
      screen.getByRole("textbox", { name: "Last Name" }),
      "Samborskyi"
    );
    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "email@gmail.com"
    );
    await user.type(
      screen.getByRole("password", { name: "Password" }),
      "1234qwerty"
    );
    await user.selectOptions(screen.getByRole('combobox', {name: "Role"}), "CLIENT")
    await user.type(
      screen.getByRole("password", { name: "Confirm Password" }),
      "1234qwerty"
    );
    await user.type(
        screen.getByRole("textbox", { name: "First Name" }),
        "Dmytro"
      );

    await user.click(screen.getByRole("button", { name: "Sign Up" }));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockRegisterUser).toHaveBeenCalledWith({
        firstName: "Dmytro",
        lastName: "Samborskyi",
        email: 'email@gmail.com',
        password: "1234qwerty",
        role: "CLIENT"
    }
    );
  });
});
