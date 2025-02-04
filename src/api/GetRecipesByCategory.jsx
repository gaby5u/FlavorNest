import axios from "axios";
import { useEffect, useState } from "react";

const GetRecipesByCategory = (category) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipeByCategory = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.log("Error fetching recipes by category: ", error);
      }
    };
    fetchRecipeByCategory();
  }, []);

  return recipes;
};

export default GetRecipesByCategory;
