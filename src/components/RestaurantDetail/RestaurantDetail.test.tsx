import { render, screen } from "@testing-library/react";
import React from "react";

import RestaurantDetail from "./RestaurantDetail";

describe("RestaurantDetail", () => {
  it("renders title", () => {
    const props = {
      restaurant: {
        address: "Some address",
        contactEmail: "myContactEmail@contactEmail.com",
        description: "Some description",
        id: "0",
        name: "Restaurant1",
      },
    };
    render(<RestaurantDetail {...props} />);
    const title = screen.getByRole("heading");
    expect(title.innerHTML).toEqual(props.restaurant.name);
  });
});
