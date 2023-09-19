import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

test("renders homepage", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  ); // Wrap your App inside MemoryRouter
  const restaurantsHeader = screen.getByText(/Restaurants/i);
  expect(restaurantsHeader).toBeInTheDocument();
});
