import { useContext } from "react";
import CharacterCard from "../CharacterCard";
import { CharacterContext } from "../../Utils/CharacterContext";
import { Characters } from "../../shared/api/types";
import "./CharacterList.css";

type Props = {
  characters: Characters;
};

export const CharacterList = ({ characters }: Props): JSX.Element => {
  const { favorites, addCharacterToFavorites, removeCharacterFromFavorites } =
    useContext(CharacterContext);

  return (
    <section className="CharacterList">
      {characters.map((item) => (
        <CharacterCard
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          character={item}
          storedCharacter={favorites.some((id) => id === item.id)}
          addCharacterToFavorites={addCharacterToFavorites}
          removeCharacterFromFavorites={removeCharacterFromFavorites}
        />
      ))}
    </section>
  );
};
