import { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import CharacterList from "../CharacterList";
import SearchPanel from "../../Components/SearchPanel";
import "./Home.css";

type Character = [
  {
    name: string;
    image: string;
    id: string;
    storedCharacter: boolean;
    addCharacterToFavorites: Function;
  }
];

export const Home = () => {
  const [characters, setCharacters] = useState<Character>();
  const cardsOnPage = 12;
  const [search, setSearch] = useState("");

  const fetchData = () => {
    axios
      .get("https://hp-api-marcosmarp.herokuapp.com/api/characters")
      .then((res) => {
        setCharacters(
          res.data
            .filter((character: { name: string }) =>
              character.name
                .toLowerCase()
                .includes(searchDebounced.toLowerCase())
            )
            .slice(0, cardsOnPage)
        );
      });
  };

  const timeout = 250;

  const [searchDebounced] = useDebounce(search, timeout);

  useEffect(() => {
    searchDebounced && fetchData();
  }, [searchDebounced]);

  return (
    <section className="Home container">
      <header className="jumbotron">
        <h3>
          Hi there! You got to the front page about characters of Harry Potter
          universe. Please Sign up or Sign in if you haven't done it yet. Enjoy!
        </h3>
      </header>
      <SearchPanel callback={setSearch} />
      {characters && <CharacterList characters={characters} />}
    </section>
  );
};
