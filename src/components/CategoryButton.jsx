import GetRecipesByCategory from "../api/useRecipesByCategory";

const CategoryButton = ({
  icon,
  title,
  onRecipesFetched,
  activeCategory,
  onClick,
}) => {
  const recipes = GetRecipesByCategory(title);

  const handleClick = () => {
    if (onRecipesFetched) {
      onRecipesFetched(recipes.recipes);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        activeCategory === title
          ? "bg-customBlack text-white"
          : "bg-customLightGray"
      } flex items-center justify-center gap-4 rounded-full font-semibold text-sm transition duration-300 px-10 py-2 hover:bg-customBlack hover:text-white w-full custom400px:w-auto md:text-xl`}
    >
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default CategoryButton;
