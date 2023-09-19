import React from "react";

import { Restaurant } from "../../domain/Restaurant";

const getDescriptionFor = (restaurant: Restaurant) => {
  return restaurant.description ? restaurant.description : restaurant.name;
};

const RestaurantDetail = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="detail">
      <h2 className="restaurant-title">{restaurant.name}</h2>{" "}
      <p
        className="restaurant-description"
        data-testid="restaurant-description"
      >
        {getDescriptionFor(restaurant)}
      </p>
    </div>
  );
};
export default RestaurantDetail;
