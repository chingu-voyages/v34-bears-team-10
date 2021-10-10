/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home", () => {
  beforeEach(() => render(<Home />));

  it("should match the snapshot", () => {
    expect(screen).toMatchSnapshot();
  });

  it("should render a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /welcome to zemnoga/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
