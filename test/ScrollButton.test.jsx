import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import ScrollButton from "../components/ScrollButton";

describe("ScrollButton", () => {
  test("ScrollButton should render correctly", () => {
    render(<ScrollButton />);

    expect(screen.getByRole('button')).toBeDefined()
    expect(screen.getByRole('icon')).toBeDefined()
  });
});