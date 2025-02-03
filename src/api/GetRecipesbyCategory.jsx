import { useEffect, useState } from "react";
import axios from "axios";

const GetRecipesbyCategory = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const fetchRecipeByCategory = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setRecipe(response.data.meals);
        console.log(response.data.meals);
      } catch (error) {
        console.log("Error fetching recipes by category:", error);
      }
    };
    fetchRecipeByCategory();
  }, []);

  return recipe;
};

export default GetRecipesbyCategory;
