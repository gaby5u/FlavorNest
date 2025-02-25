import { useEffect, useState } from "react";
import axios from "axios";

const useRecipesByCategories = () => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchRecipeByCategory = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setRecipe(response.data.meals);
      } catch (error) {
        console.log("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipeByCategory();
  }, []);

  return { recipe, isLoading };
};

export default useRecipesByCategories;
