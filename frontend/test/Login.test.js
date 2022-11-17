/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../src/pages/Register";

describe("<Register />", () => {
  test("should render all elements", () => {
    render(<Register />);
    screen.debug();
  });
});
