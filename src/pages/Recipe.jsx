import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();

  return <div>Recipe</div>;
};

export default Recipe;
