import { useContext } from "react";
import { CharacterContext } from "../../Utils/CharacterContext";
import CharacterCard from "../CharacterCard";
import "./FavoriteCharacterList.css";

export const FavoriteCharacterList = () => {
  const { favorites, addCharacterToFavorites, removeCharacterFromFavorites } =
    useContext(CharacterContext);

  return (
    <section className="Characters">
      <h2>Favorite characters</h2>
      {favorites.length > 0 ? (
        <div className="Character-list">
          {favorites.map((el, i) => (
            <CharacterCard
              key={i}
              id={el.id}
              name={el.name}
              image={el.image}
              character={el}
              storedCharacter={favorites.find((o) => o.name === el.name)}
              addCharacterToFavorites={addCharacterToFavorites}
              removeCharacterFromFavorites={removeCharacterFromFavorites}
            />
          ))}
        </div>
      ) : (
        <h2 className="no-characters">No characters in here, add some!</h2>
      )}
    </section>
  );
};
