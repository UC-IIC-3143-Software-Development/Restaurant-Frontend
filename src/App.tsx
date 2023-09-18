import Typography from "@mui/material/Typography";
import axios from "Axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import RestaurantList from "./components/RestaurantList";
import { Restaurant } from "./domain/Restaurant";

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => setRestaurants(res.data));
  }, []);

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
