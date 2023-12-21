import { expect, test, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { useSession } from "next-auth/react";

import CheckoutForm from "../components/CheckoutForm";

vi.mock("next-auth/react", () => {
  const originalModule = vi.importActual("next-auth/react");
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "admin" },
  };
  return {
    ...originalModule,
    useSession: vi.fn(() => {
      return { data: mockSession, status: "unauthenticated" };
    }),
  };
});

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("Checkout Form", () => {
  const mockBuyTicket = vi.fn(
    (userFirstName, userLastName, userEmail, eventUuid) => {
      return Promise.resolve({
        userFirstName: userFirstName,
        userLastName: userLastName,
        userEmail: userEmail,
        eventUuid: eventUuid,
      });
    }
  );

  test("Checkout Form should render correctly", async () => {
    const { user } = setup(<CheckoutForm />);

    expect(screen.getByRole("textbox", { name: "First Name" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Last Name" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Card number" })).toBeDefined();
    expect(screen.getByRole("date", { name: "Expiry Date" })).toBeDefined();
    expect(screen.getByRole("textbox", { name: "CVV" })).toBeDefined();

    expect(screen.getByRole("button", { name: "Buy Ticket" })).toBeDefined();
  });

  test("Checkout Form should validate empty form filds", async () => {
    const { user } = setup(<CheckoutForm buyTicket={mockBuyTicket} />);

    await user.click(screen.getByRole("button", { name: "Buy Ticket" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(6);
    expect(mockBuyTicket).not.toBeCalled();
  });

  test("Checkout Form should validate First Name and Last Name", async () => {
    const { user } = setup(<CheckoutForm buyTicket={mockBuyTicket} />);

    await user.type(
      screen.getByRole("textbox", { name: "First Name" }),
      "Dmytro"
    );
    await user.type(
      screen.getByRole("textbox", { name: "Last Name" }),
      "Samborskyi"
    );

    await user.click(screen.getByRole("button", { name: "Buy Ticket" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(4);
    expect(mockBuyTicket).not.toBeCalled();
  });

  test("Checkout Form should validate email", async () => {
    const { user } = setup(<CheckoutForm buyTicket={mockBuyTicket} />);

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "email@gmail.com"
    );

    await user.click(screen.getByRole("button", { name: "Buy Ticket" }));

    expect(await screen.findAllByRole("alert")).toHaveLength(5);
    expect(mockBuyTicket).not.toBeCalled();
  });

  test("Checkout Form should call submit function", async () => {
    const { user } = setup(
      <CheckoutForm buyTicket={mockBuyTicket} eventUuid={"12"} />
    );

    await user.type(
      screen.getByRole("textbox", { name: "First Name" }),
      "Dmytro"
    );
    await user.type(
      screen.getByRole("textbox", { name: "Last Name" }),
      "Samborskyi"
    );
    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "email@gmail.com"
    );
    await user.type(
      screen.getByRole("textbox", { name: "Card number" }),
      "4444111188888282"
    );
    await user.type(
      screen.getByRole("date", { name: "Expiry Date" }),
      "2023-12"
    );
    await user.type(screen.getByRole("textbox", { name: "CVV" }), "123");

    await user.click(screen.getByRole("button", { name: "Buy Ticket" }));

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockBuyTicket).toHaveBeenCalledWith({
      userFirstName: "Dmytro",
      userLastName: "Samborskyi",
      userEmail: "email@gmail.com",
      eventUuid: "12",
    });
  });
});
