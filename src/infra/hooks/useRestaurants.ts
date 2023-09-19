import axios from "axios";
import { useEffect, useState } from "react";

import { Restaurant } from "../../domain/Restaurant";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchRestaurants = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/restaurants");
        setRestaurants(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);
  return { error, loading, restaurants };
};

export default useRestaurants;
