import { useState } from "react";
import { useDebounce } from "use-debounce";
import CharacterList from "../CharacterList";
import { useFetchingData } from "../../hooks/useFetchingData";
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
  const url = "https://hp-api.onrender.com/api/characters";

  const timeout = 250;

  const [searchDebounced] = useDebounce(search, timeout);

  useFetchingData(searchDebounced, url, setCharacters, cardsOnPage)

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
