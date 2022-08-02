import { Link } from "react-router-dom";
import "./CharacterCard.css";

type AppProps = {
  id: string;
  name?: string;
  image?: string;
  character: {
    name: string;
  };
  storedCharacter: boolean;
  addCharacterToFavorites: Function;
  removeCharacterFromFavorites: Function;
};

export const CharacterCard = ({
  id,
  name,
  image,
  character,
  storedCharacter,
  addCharacterToFavorites,
  removeCharacterFromFavorites,
}: AppProps) => {
  const defaultImage =
    "https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg";

  return (
    <article className="CharacterCard">
      <img src={image || defaultImage} alt="Character" />
      <p>{name}</p>
      <span
        onClick={() =>
          storedCharacter
            ? removeCharacterFromFavorites(name)
            : addCharacterToFavorites(character)
        }
      >
        {storedCharacter ? "♥️" : "♡"}
      </span>
      <Link to={{ pathname: `/${id}` }}>Подробнее</Link>
    </article>
  );
};
