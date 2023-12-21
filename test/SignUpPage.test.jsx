import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation");
import SignUpPage from "../app/signup/page"

describe("Sign up Page", () => {

  test("Sign up Page should render a form", () => {
    render(<SignUpPage />);

    expect(screen.getByRole('form')).toBeDefined();
    
  });

})