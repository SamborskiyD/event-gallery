

import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("next/navigation");
import LogInPage from "../app/login/page"

describe("Log in Page", () => {

  test("Log in Page should render a form", () => {
    render(<LogInPage />);

    expect(screen.getByRole('form')).toBeDefined();
    
  });

})