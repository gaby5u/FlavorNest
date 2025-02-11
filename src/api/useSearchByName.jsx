import { useEffect, useState } from "react";
import axios from "axios";

const useSearchByName = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    const fetchSerchingByName = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=Asado"
        );
        setRecipes(response.data.meals);
      } catch (error) {
        console.log("Error at searching recipe by name", error);
      }
    };
    fetchSerchingByName();
  }, []);

  return recipes;
};

export default useSearchByName;
