import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
//import LoadingSpinner from "../../Components/LoadingSpinner";
import CharacterCard from "../CharacterCard";
import "./CharacterList.css";

type Character = [
  {
    name: string;
    image: string;
    id: string;
  }
];

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Character>();
  //const [loading, setLoading] = useState(true);
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
        //setLoading(false);
      });
  };

  const timeout = 250;

  const [searchDebounced] = useDebounce(search, timeout);

  useEffect(() => {
    searchDebounced && fetchData();
  }, [searchDebounced]);

  return (
    <div>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value.trim())}
      />

      <section className="CharacterList">
        {characters &&
          characters.map((el) => (
            <CharacterCard
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image}
            />
          ))}
      </section>
    </div>
  );
};
