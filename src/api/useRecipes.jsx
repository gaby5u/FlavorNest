import { useEffect, useState } from "react";
import axios from "axios";

const GetRecipes = (type) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
        );
        console.log(response.data.meals);
        setRecipes(response.data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, []);

  return recipes;
};

export default GetRecipes;
