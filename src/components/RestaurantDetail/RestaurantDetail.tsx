import React from "react";

import { Restaurant } from "../../domain/Restaurant";

const RestaurantDetail = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="detail">
      {" "}
      <h2 className="restaurant-title">{restaurant.name}</h2>{" "}
      <p className="restaurant-description">{restaurant.description}</p>
    </div>
  );
};
export default RestaurantDetail;
