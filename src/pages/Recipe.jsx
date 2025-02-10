import { useParams } from "react-router-dom";
import useRecipeById from "../api/useRecipeById";
import Heading1 from "../components/Heading1";
import RecipeDetails from "../functions/RecipeDetails";

const Recipe = () => {
  const { id } = useParams();
  const { recipe, loading } = useRecipeById(id);

  if (loading) {
    return <p className="mt-16 px-4 sm:px-8 md:px-20">Loading...</p>;
  }

  if (!recipe) {
    return <p className="mt-16 px-4 sm:px-8 md:px-20">No recipe found.</p>;
  }

  return (
    <div className="font-krub mt-16 px-4 sm:px-8 md:px-20">
      <div className="flex flex-col-reverse gap-8 2xl:flex-row">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover mx-[auto] rounded-[25px] md:max-w-[700px] md:max-h-[800px] 2xl:text-start"
        />
        <div className="w-full">
          <div>
            <Heading1 title={recipe.strMeal} className="text-start" />
            <div className="flex items-center justify-between text-customDarkGray my-4 md:text-xl xl:text-2xl">
              <p>
                <span className="font-bold">Area:</span> {recipe.strArea}
              </p>
              <p>
                <span className="font-bold">Category:</span>{" "}
                {recipe.strCategory}
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-1 bg-customLightGray w-full px-4 py-2 rounded-[25px] sm:px-16 sm:py-4 sm:gap-16">
            <RecipeDetails type="Ingredients" recipe={recipe} />
            <RecipeDetails type="Measures" recipe={recipe} />
          </div>
        </div>
      </div>
      <div className="my-4 sm:my-8 xl:my-16">
        <Heading1
          title="Instructions"
          className="text-start text-2xl m-0 sm:m-0 md:text-4xl xl:m-0"
        />
        <p className="text-customDarkGray my-4 md:text-xl xl:text-2xl">
          {recipe.strInstructions}
        </p>
        {recipe.strYoutube && (
          <div className="relative w-full h-[200px] my-4 sm:h-[400px] lg:h-[800px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${
                recipe.strYoutube.split("=")[1]
              }?autoplay=1&mute=1
            `}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
