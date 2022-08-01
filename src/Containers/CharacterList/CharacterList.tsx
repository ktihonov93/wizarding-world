import { useContext } from "react";
import CharacterCard from "../CharacterCard";
import { CharacterContext } from "../../Utils/CharacterContext";
import "./CharacterList.css";

type Characters = {
  characters: [
    {
      name: string;
      image: string;
      id: string;
      storedCharacter: boolean;
      addCharacterToFavorites: Function;
    }
  ];
};

type AppProps = {
  favorites: {
    name: string;
  }[];
  addCharacterToFavorites: Function;
  removeCharacterFromFavorites: Function;
};

export const CharacterList = (characters: Characters) => {
  const {
    favorites,
    addCharacterToFavorites,
    removeCharacterFromFavorites,
  }: AppProps = useContext(CharacterContext);

  return (
    <section className="CharacterList">
      {characters.characters.map((el) => (
        <CharacterCard
          key={el.id}
          id={el.id}
          name={el.name}
          image={el.image}
          character={el}
          storedCharacter={favorites.some((o) => o.name === el.name)}
          addCharacterToFavorites={addCharacterToFavorites}
          removeCharacterFromFavorites={removeCharacterFromFavorites}
        />
      ))}
    </section>
  );
};
