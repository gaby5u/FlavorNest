import { useEffect, useState } from "react";
import axios from "axios";

const useSearchByName = (searchedMeal) => {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchedMeal) return;

    const fetchSerchingByName = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.log("Error at searching recipe by name", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSerchingByName();
  }, [searchedMeal]);

  return { recipes, isLoading };
};

export default useSearchByName;
