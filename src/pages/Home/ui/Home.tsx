import { useState } from "react";
import { useDebounce } from "use-debounce";
import CharacterList from "../../../Containers/CharacterList";
import SearchPanel from "../../../Components/SearchPanel";
import { useGetCharacterQuery } from "../../../shared/api/characterApi";
import { CARDS_ON_PAGE, TIMEOUT } from "../lib/constants";
import "./Home.css";

export const Home = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [searchDebounced] = useDebounce(search, TIMEOUT); 
  const { data: characters } = useGetCharacterQuery({searchDebounced, CARDS_ON_PAGE});

  return (
    <section className="home container">
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
