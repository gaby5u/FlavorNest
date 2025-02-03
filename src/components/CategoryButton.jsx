// import GetRecipesbyCategory from "../api/GetRecipesbyCategory";

const CategoryButton = ({ icon, title }) => {
  // const recipes = GetRecipesbyCategory();

  return (
    <button className="flex items-center justify-center gap-4 bg-customLightGray rounded-full font-semibold text-sm transition duration-300 px-10 py-2 hover:bg-customBlack hover:text-white md:text-xl">
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default CategoryButton;
