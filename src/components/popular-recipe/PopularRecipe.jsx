import React from "react";
import BlackButton from "../BlackButton";

const PopularRecipe = ({ recipeId, title, img }) => {
  return (
    <div className="popular-recipe bg-customLightGray rounded-[35px] p-8 max-w-full sm:max-w-[500px]">
      <p className="font-bold text-lg md:text-xl xl:text-2xl">{title}</p>
      <img src={img} alt={title} className="rounded-[25px] mt-8 mb-2" />
      <BlackButton recipeId={recipeId} />
    </div>
  );
};

export default PopularRecipe;
