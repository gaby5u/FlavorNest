import { useState } from "react";
import useSearchByName from "../api/useSearchByName";
import FavRecipe from "../components/FavRecipe";
import Heading1 from "../components/Heading1";

const Search = () => {
  const [searchedMeal, setSearchedMeal] = useState("");
  const recipes = useSearchByName(searchedMeal);

  return (
    <div className="flex flex-col items-center flex-grow px-4 py-8 md:py-16">
      <div className="relative w-[100%] max-w-[900px]">
        <input
          type="text"
          placeholder="Type a meal..."
          className="w-[100%] bg-customLightGray rounded-full border-2 border-customLightGray transition duration-200 focus:outline-none focus:border-customDarkGray my-4 px-4 py-2 sm:my-8 sm:py-4 md:my-16"
          onChange={(e) => setSearchedMeal(e.target.value.trim())}
        />
        <svg
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0474 22.0465L17.9777 17.9767M17.3963 9.25582C17.3963 10.3247 17.1857 11.3831 16.7767 12.3707C16.3676 13.3582 15.7681 14.2555 15.0122 15.0113C14.2564 15.7672 13.3591 16.3667 12.3716 16.7758C11.3841 17.1848 10.3256 17.3954 9.25672 17.3954C8.18782 17.3954 7.12939 17.1848 6.14186 16.7758C5.15432 16.3667 4.25703 15.7672 3.5012 15.0113C2.74538 14.2555 2.14582 13.3582 1.73677 12.3707C1.32772 11.3831 1.11719 10.3247 1.11719 9.25582C1.11719 7.09708 1.97474 5.02675 3.5012 3.50029C5.02766 1.97384 7.09798 1.11628 9.25672 1.11628C11.4155 1.11628 13.4858 1.97384 15.0122 3.50029C16.5387 5.02675 17.3963 7.09708 17.3963 9.25582Z"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {!recipes && searchedMeal !== "" && (
        <Heading1
          title="Ups, we don't have this"
          position="end"
          highlight="recipe"
          className="my-16"
        />
      )}
      <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-8">
        {recipes &&
          recipes.map((recipe, index) => (
            <FavRecipe key={index} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Search;
