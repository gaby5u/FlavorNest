import { useEffect, useState } from "react";
import axios from "axios";

const useSearchByName = (searchedMeal) => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    if (!searchedMeal) return;

    const fetchSerchingByName = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.log("Error at searching recipe by name", error);
      }
    };
    fetchSerchingByName();
  }, [searchedMeal]);

  return recipes;
};

export default useSearchByName;
