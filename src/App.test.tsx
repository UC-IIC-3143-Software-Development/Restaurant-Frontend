import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

test("renders homepage", () => {
  render(<App />);
  const restaurantsHeader = screen.getByText(/Restaurants/i);
  expect(restaurantsHeader).toBeInTheDocument();
});
