import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CharacterContext } from "../../Utils/CharacterContext";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CharacterCard from "../CharacterCard";
import LoadingSpinner from "../../Components/LoadingSpinner";
import "./FavoriteCharacterList.css";

export const FavoriteCharacterList = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const { favorites, addCharacterToFavorites, removeCharacterFromFavorites } =
    useContext(CharacterContext);
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://hp-api.onrender.com/api/characters";

  const fetchData = (url) => {
    axios.get(url).then((res) => {
      setCharacters(favorites.map((id) => res.data.filter((o) => o.id === id)));
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [favorites]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!characters) {
    return null;
  }

  return (
    <section className="Characters">
      <h2>Favorite characters</h2>
      {favorites.length > 0 ? (
        <div className="Character-list">
          {characters.map(([el], i) => (
            <CharacterCard
              key={i}
              id={el.id}
              name={el.name}
              image={el.image}
              character={el}
              storedCharacter={favorites.find((id) => id === el.id)}
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
