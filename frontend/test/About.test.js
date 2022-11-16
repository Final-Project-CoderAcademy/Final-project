import { About } from "../src/pages/About";
import { render, screen } from "@testing-library/react";

describe("<About />", () => {
  test("link too register page by clicking the Let's start! button", () => {
    render(<About />);
    const numOfButton = screen.findAllByRole("button");
    expect(numOfButton).toHaveLength(3);
  });
});
