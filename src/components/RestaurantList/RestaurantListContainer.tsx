import React from "react";

import useRestaurants from "../../infra/hooks/useRestaurants";
import RestaurantList from "./RestaurantList";

const RestaurantListContainer = () => {
  const { error, loading, restaurants } = useRestaurants();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }

  return <RestaurantList restaurants={restaurants} />;
};

export default RestaurantListContainer;
