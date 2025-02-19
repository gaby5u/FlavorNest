import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const FavRecipe = ({ recipe }) => {
  const navigate = useNavigate();
  const [favoritesList, setFavoriteList] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFavoriteList();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) getFavoriteList();
      else setIsFavorite(false);
    });
    return () => unsubscribe();
  }, [recipe.idMeal]);

  const handleClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  const getFavoriteList = async () => {
    if (!auth.currentUser) return;
    try {
      const usersFavoritesRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "favorites"
      );
      const data = await getDocs(usersFavoritesRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFavoriteList(filteredData);

      setIsFavorite(filteredData.some((fav) => fav.idMeal === recipe.idMeal));
    } catch (err) {
      console.error(err);
    }
  };

  const addToFavorites = async () => {
    if (auth.currentUser) {
      try {
        const userFavoritesRef = collection(
          db,
          "users",
          auth.currentUser.uid,
          "favorites"
        );
        if (!isFavorite) {
          await addDoc(userFavoritesRef, recipe);
          getFavoriteList();
          setIsFavorite(true);
          setFavoriteList((prev) => [...prev, recipe]);
          console.log("added to favorites");
        } else {
          deleteFromFavorites();
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("You should login for adding in favorites");
    }
  };

  const deleteFromFavorites = async () => {
    try {
      const favToDelete = favoritesList.find(
        (fav) => fav.idMeal === recipe.idMeal
      );

      const favoriteDocRef = doc(
        db,
        "users",
        auth.currentUser.uid,
        "favorites",
        favToDelete.id
      );
      await deleteDoc(favoriteDocRef);
      getFavoriteList();
      setIsFavorite(false);
      setFavoriteList((prev) =>
        prev.filter((fav) => fav.idMeal !== recipe.idMeal)
      );
      console.log("recipe deleted successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-customLightGray rounded-[35px] max-w-full cursor-pointer border-2 border-customLightGray transition duration-200 hover:border-customOrange hover:scale-[1.02] md:max-w-[300px] lg:max-w-[400px]">
      <div className="relative">
        <img
          onClick={handleClick}
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-t-[33px] w-full"
        />
        <div
          onClick={() => addToFavorites()}
          className="flex items-center justify-center rounded-full bg-white absolute top-2 right-2 w-[53px] h-[53px]"
        >
          <svg
            className="cursor-pointer fill-transparent "
            width="29"
            height="29"
            viewBox="0 0 29 29"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4993 25.7979L12.7473 24.2029C6.52435 18.56 2.41602 14.8263 2.41602 10.2708C2.41602 6.53708 5.34018 3.625 9.06185 3.625C11.1643 3.625 13.1823 4.60375 14.4993 6.13833C15.8164 4.60375 17.8343 3.625 19.9368 3.625C23.6585 3.625 26.5827 6.53708 26.5827 10.2708C26.5827 14.8263 22.4743 18.56 16.2514 24.2029L14.4993 25.7979Z"
              stroke="#212121"
              className="transition-all duration-300 ease-in-out hover:stroke-none hover:fill-red-500 "
              fill={isFavorite ? "red" : "transarent"}
              strokeWidth={isFavorite ? "0" : "2"}
            />
          </svg>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-bold">{recipe.strMeal}</h3>
      </div>
    </div>
  );
};

export default FavRecipe;
