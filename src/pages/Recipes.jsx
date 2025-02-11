import { useEffect, useState } from "react";
import GetRecipesByCategory from "../api/useRecipesByCategory";

import Heading1 from "../components/Heading1";
import CategoryButton from "../components/CategoryButton";
import FavRecipe from "../components/FavRecipe";
import GetRecipesCategories from "../api/GetRecipesCategories";
import GetRecipeIcon from "../functions/GetRecipeIcon";

const Recipes = () => {
  const categories = GetRecipesCategories();
  const defaultRecipes = GetRecipesByCategory("Beef");
  const [fetchedRecipes, setFetchedRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    setFetchedRecipes(defaultRecipes);
    setActiveCategory("Beef");
  }, [defaultRecipes]);

  const handleRecipesFetched = (recipes) => {
    setFetchedRecipes(recipes);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category.strCategory);
  };

  return (
    <div>
      <div className="bg-[url('../assets/bg-recipe.png')] bg-center bg-cover bg-no-repeat w-full rounded-[35px] mt-16 px-4 py-16 sm:px-8 md:px-20 md:py-32">
        <Heading1
          className="text-start max-w-[200px] custom400px:max-w-[400px] md:max-w-[500px]"
          title="Explore Culinary Insights"
          position="middle"
          highlight="Culinary"
        />
      </div>
      <div className="font-krub my-4 sm:my-8 xl:my-16">
        <Heading1 title="What to Cook?" position="middle" highlight="Cook" />
        <div className="flex items-center justify-center gap-4 flex-wrap my-8">
          {categories.map((category, index) => (
            <CategoryButton
              onClick={() => handleCategoryClick(category)}
              onRecipesFetched={handleRecipesFetched}
              key={index}
              icon={GetRecipeIcon(category.strCategory)}
              title={category.strCategory}
              activeCategory={activeCategory}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {fetchedRecipes.map((fetchedRecipe, index) => (
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
