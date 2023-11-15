/**
 * Testing file for the HelloWorld component.
 */
import { render, screen } from "@testing-library/react";
import React from "react";

import HelloWorld from ".";

test("Render HelloWorld Component", () => {
  render(<HelloWorld />);
  const element = screen.getByText(/Hello World!/i);
  expect(element).toBeInTheDocument();
});
