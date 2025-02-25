import { useEffect, useState } from "react";
import axios from "axios";

const GetRecipes = (type) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);

  return { recipes, isLoading };
};

export default GetRecipes;
