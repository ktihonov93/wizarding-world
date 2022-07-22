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
    <section className="Home">
      <SearchPanel callback={setSearch} />
      {characters && <CharacterList characters={characters} />}
    </section>
  );
};
