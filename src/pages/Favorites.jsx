import { useContext } from "react";
import { FavoriteContextP } from "../components/FavoriteContext";
import FavRecipe from "../components/FavRecipe";
import { auth } from "../config/firebase";
import Heading1 from "../components/Heading1";

const Favorites = () => {
  const { favoritesList } = useContext(FavoriteContextP);

  return (
    <div className="flex-grow px-4 py-8 md:py-16">
      {auth.currentUser ? (
        <>
          <Heading1
            title="Favorite"
            highlight="recipes"
            position="end"
            className="my-16"
          />
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {favoritesList.map((recipe, index) => (
              <FavRecipe key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </>
      ) : (
        <Heading1
          title="You should login for seeing your favorite recipes"
          highlight="login"
          position="middle"
          className="my-26"
        />
      )}
    </div>
  );
};

export default Favorites;
