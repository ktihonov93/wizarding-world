import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CharacterContext } from "../../Utils/CharacterContext";
import CharacterCard from "../CharacterCard";
import LoadingSpinner from "../../Components/LoadingSpinner";
import "./FavoriteCharacterList.css";
/*
type Character = [
  {
    name: string;
    image: string;
    id: string;
    storedCharacter: boolean;
    addCharacterToFavorites: Function;
  }
];
*/
export const FavoriteCharacterList = () => {
  const { favorites, addCharacterToFavorites, removeCharacterFromFavorites } =
  useContext(CharacterContext);
  console.log("favorites", favorites)
  /*let favorites = [
    "60be073e-2f67-416c-a87d-c9b0a8129261",
    "32ff04a0-3c2c-44c5-8406-3a2aa36e1fce",
    "0cd9f62e-a85c-4259-bc30-a2e6447774ce",
  ];*/
  let [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState/*<Character>*/(null);
  const url = "https://hp-api-marcosmarp.herokuapp.com/api/characters";

  const fetchData = (url) => {
    axios.get(url).then((res) => {
      setCharacters(favorites.map((id) => res.data.filter((o) => o.id === id)));
      console.log(favorites.map((id) => res.data.filter((o) => o.id === id)));
      console.log(res.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [favorites]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!characters) {
    return null;
  }


  return (
    <section className="Characters">
      <h2>Favorite characters</h2>
      {
        favorites.length > 0 /*!loading*/ ? (
          <div className="Character-list">
            {console.log(characters)}
            {characters.map(([el], i) => (
              <CharacterCard
                key={i}
                id={el.id}
                name={el.name}
                image={el.image}
                character={el}
                storedCharacter={favorites.find((id) =>  id === el.id)}
                addCharacterToFavorites={addCharacterToFavorites}
                removeCharacterFromFavorites={removeCharacterFromFavorites}
              />
            ))}
          </div>
        ) : (
          <h2 className="no-characters">No characters in here, add some!</h2>
        )
      }
    </section>
  );
};
