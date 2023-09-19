import React from "react";

import useRestaurant from "../../infra/hooks/useRestaurant";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantDetailContainer = () => {
  const { error, restaurant } = useRestaurant();

  if (error) {
    return <p>Error...</p>;
  }

  return <RestaurantDetail restaurant={restaurant} />;
};

export default RestaurantDetailContainer;
