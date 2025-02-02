import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  return <div className="">Recipe with id {id} cliked</div>;
};

export default Recipe;
