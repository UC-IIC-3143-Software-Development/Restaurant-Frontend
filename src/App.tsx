import Typography from "@mui/material/Typography";
import React from "react";

import "./App.css";
import RestaurantList from "./components/RestaurantList";

function App() {
  const restaurants = [
    { address: "Providencia", id: "0", name: "Almuerzos Tia Norita" },
    { address: "La Florida", id: "1", name: "El Pollo del 8" },
  ];
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        {" "}
        Restaurants{" "}
      </Typography>{" "}
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;
