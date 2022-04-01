/**
 * @jest-environment jsdom
 */

// Refer to docs for setup (section on Jest/RTL): https://nextjs.org/docs/testing

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a greeting message", () => {
    render(<Home />);

    const greetingMessage = screen.getByText("Good morning user!");

    expect(greetingMessage).toBeInTheDocument();
  });
});
