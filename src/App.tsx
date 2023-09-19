import Typography from "@mui/material/Typography";
import React from "react";

import "./App.css";
import RestaurantListContainer from "./components/RestaurantList/RestaurantListContainer";

function App() {
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        {" "}
        Restaurants{" "}
      </Typography>{" "}
      <RestaurantListContainer />
    </div>
  );
}

export default App;
