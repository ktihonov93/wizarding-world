import { useState } from "react";
import { useDebounce } from "use-debounce";
import CharacterList from "../../../Containers/CharacterList";
import SearchPanel from "../../../Components/SearchPanel";
import "./Home.css";
import { useGetCharacterQuery } from "../../../shared/api/characterApi";

export const Home = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const timeout = 250;
  const [searchDebounced] = useDebounce(search, timeout);
  const cardsOnPage = 12;
  const { data: characters } = useGetCharacterQuery({searchDebounced, cardsOnPage});

  console.log(characters)

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
