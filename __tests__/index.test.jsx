/**
 * @jest-environment jsdom
 */

// Refer to docs for setup (section on Jest/RTL): https://nextjs.org/docs/testing

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// Page and component imports
import Home from "../pages/index";
import Clock from "../components/Clock";
import ImageOfDay from "../components/ImageOfDay";
import ContentList from "../components/content/ContentList";

describe("Home", () => {
  it("renders a greeting message", () => {
    render(<Home />);

    const greetingMessage = screen.getByText("Good morning user!");

    expect(greetingMessage).toBeInTheDocument();
  });

  it("renders imported static components", () => {
    render(<Home />);

    const dateMessage = screen.getByText("current day and date");
    const contentItem = screen.getByRole("listitem", { name: "news" });

    expect(dateMessage).toBeInTheDocument();
    expect(contentItem).toBeInTheDocument();
  });
});
