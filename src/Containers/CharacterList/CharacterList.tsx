import { useContext } from "react";
import CharacterCard from "../CharacterCard";
import { CharacterContext } from "../../Utils/CharacterContext";
import { Characters } from "../../shared/api/types";
import "./CharacterList.css";

type Props = {
  characters: Characters;
};

export const CharacterList = ({characters}: Props): JSX.Element => {
  const {
    favorites,
    addCharacterToFavorites,
    removeCharacterFromFavorites,
  } = useContext(CharacterContext);

  return (
    <section className="CharacterList">
      {characters.map((el) => (
        <CharacterCard
          key={el.id}
          id={el.id}
          name={el.name}
          image={el.image}
          character={el}
          storedCharacter={favorites.some((id) => id === el.id)}
          addCharacterToFavorites={addCharacterToFavorites}
          removeCharacterFromFavorites={removeCharacterFromFavorites}
        />
      ))}
    </section>
  );
};
