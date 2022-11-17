/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("<Register />", () => {
  test("should render all elements", () => {
    render(<App />);
  });
});
