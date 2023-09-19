import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Restaurant } from "../../domain/Restaurant";

const useRestaurant = () => {
  const { id } = useParams<string>();
  const [restaurant, setRestaurant] = useState<Restaurant>({
    address: "",
    contactEmail: "",
    id: "0",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRestaurant = async () => {
      setError(false);
      setLoading(true);
      try {
        const restaurant = await axios.get(
          `http://localhost:8080/restaurant/${id}`,
        );
        setRestaurant(restaurant.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurant();
  }, [id]);
  return { error, loading, restaurant };
};

export default useRestaurant;
