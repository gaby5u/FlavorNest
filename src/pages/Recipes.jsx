import { useState } from "react";

import Heading1 from "../components/Heading1";
import CategoryButton from "../components/CategoryButton";
import FavRecipe from "../components/FavRecipe";
import GetRecipesbyCategory from "../api/GetRecipesCategories";
import GetRecipeIcon from "../functions/GetRecipeIcon";

const Recipes = () => {
  const categories = GetRecipesbyCategory();
  const [fetchedRecipes, setFetchedRecipes] = useState(null);

  const handleRecipesFetched = (recipes) => {
    setFetchedRecipes(recipes);
  };

  return (
    <div>
      <div className="bg-[url('../assets/bg-recipe.png')] bg-center bg-cover bg-no-repeat w-full rounded-[35px] mt-16 px-4 py-16 sm:px-8 md:px-20">
        <Heading1
          className="text-start max-w-[500px]"
          title="Explore Culinary Insights"
          position="middle"
          highlight="Culinary"
        />
      </div>
      <div className="font-krub my-12 sm:my-8 xl:my-16">
        <Heading1 title="What to Cook?" position="middle" highlight="Cook" />
        <div className="flex items-center justify-center gap-4 flex-wrap my-8">
          {categories.map((category, index) => (
            <CategoryButton
              onRecipesFetched={handleRecipesFetched}
              key={index}
              icon={GetRecipeIcon(category.strCategory)}
              title={category.strCategory}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {fetchedRecipes?.map((fetchedRecipe, index) => (
            <FavRecipe
              key={index}
              recipeId={fetchedRecipe.idMeal}
              image={fetchedRecipe.strMealThumb}
              title={fetchedRecipe.strMeal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
