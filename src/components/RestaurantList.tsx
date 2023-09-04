import React from "react";

import { Restaurant } from "../domain/Restaurant";

type RestaurantListProps = {
  restaurants: Restaurant[];
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div data-test="restaurant-list">
      {restaurants.map((restaurant) => (
        <div className="restaurant-item" key={restaurant.id}>
          <h2 className="name">{restaurant.name}</h2>
          <p className="address">{restaurant.address}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
