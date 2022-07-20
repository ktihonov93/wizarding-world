import { Link } from "react-router-dom";
import "./CharacterCard.css";

type AppProps = {
  id: string;
  name: string;
  image: string;
};

export const CharacterCard = ({ id, name, image }: AppProps) => {
  return (
    <article className="CharacterCard">
      <img src={image} alt="Character"></img>
      <p>{name}</p>
      <Link to={{ pathname: `/${id}` }}>Подробнее</Link>
    </article>
  );
};
