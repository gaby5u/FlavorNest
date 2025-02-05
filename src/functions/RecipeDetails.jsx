const RecipeDetails = ({ recipe, type }) => {
  const items = [];

  for (let i = 1; i <= 20; i++) {
    const value =
      type === "Ingredients"
        ? recipe[`strIngredient${i}`]
        : recipe[`strMeasure${i}`];
    if (value && value.trim() !== "") {
      items.push(value);
    }
  }

  return (
    <ul className="text-customDarkGray my-4 md:text-lg xl:text-xl">
      {items.map((item, index) => (
        <li className="list-disc my-2 mx-4" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default RecipeDetails;
