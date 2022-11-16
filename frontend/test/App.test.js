import { render, screenshot } from '@testing-library/react'
import App from '../src/App'

describe("<About />", () => {
    test("link too register page by clicking the Let's start! button", () => {
      render(<About />);
      const numOfButton = screen.findAllByRole("button");
      expect(numOfButton).toHaveLength(3);
    });
  });