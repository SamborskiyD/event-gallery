
import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import CheckoutPage from "../app/checkout/page"
vi.mock("next-auth/react");

describe("Checkout Page", () => {

  test("Checkout Page should render form when ticket is not purchased", () => {
    render(<CheckoutPage initialPurchased={false} searchParams={{eventId: '12'}} />);

    expect(screen.getByRole('form')).toBeDefined();
    
  });

  test("Checkout Page should render image when ticket is purchased", () => {
    render(<CheckoutPage initialPurchased={true} searchParams={{eventId: '12'}} />);

    expect(screen.getByRole('img')).toBeDefined()
    expect(screen.getByRole('heading', {level: 1})).toBeDefined()
    expect(screen.getAllByRole('link')).toBeDefined()
    expect(screen.getByRole('link', {name: 'Go to Homepage'}).href).toEqual('http://localhost:3000/')

  })
})