import Typography from "@mui/material/Typography";
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import RestaurantDetailContainer from "./components/RestaurantDetail/RestaurantDetailContainer";
import RestaurantListContainer from "./components/RestaurantList/RestaurantListContainer";

function App() {
  return (
    <div>
      <Typography component="h2" data-test="heading" variant="h2">
        {" "}
        Restaurants{" "}
      </Typography>{" "}
      <Routes>
        <Route element={<RestaurantListContainer />} path="/" />
        <Route
          element={<RestaurantDetailContainer />}
          path="/restaurants/:id"
        />
      </Routes>
    </div>
  );
}

export default App;
