import React from "react";

import { Restaurant } from "../domain/Restaurant";

type RestaurantListProps = {
  restaurants: Restaurant[];
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div data-test="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <div className="restaurant-item" key={index}>
          <h2 className="name">{restaurant.name}</h2>
          <p className="address">{restaurant.address}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
