import axios from "axios";
import { useEffect, useState } from "react";

const useRecipeById = (id) => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(response.data.meals ? response.data.meals[0] : null);
      } catch (error) {
        console.log("Error fetching recipe by id", error);
      } finally {
        setisLoading(false);
      }
    };
    if (id) {
      fetchRecipeById();
    }
  }, []);

  return { recipe, isLoading };
};

export default useRecipeById;
