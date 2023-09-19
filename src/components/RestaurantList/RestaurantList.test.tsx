import { render, screen } from "@testing-library/react";
import React from "react";

import RestaurantList from "./RestaurantList";

describe("RestaurantList", () => {
  it("render restaurants list", async () => {
    const props = {
      restaurants: [
        {
          address: "myAddress1",
          contactEmail: "myRestaurant1@myRestaurant.com",
          id: "0",
          name: "myRestaurant1",
        },
        {
          address: "myAddress2",
          contactEmail: "myRestaurant2@myRestaurant.com",
          id: "1",
          name: "myRestaurant2",
        },
      ],
    };

    render(<RestaurantList {...props} />);

    const headings = await screen.findAllByRole("heading");

    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.restaurants[index].name);
    });
  });
});
