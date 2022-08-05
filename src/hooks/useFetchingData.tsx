import { useEffect } from "react";
import axios from "axios";

export const useFetchingData = (
  searchDebounced: any,
  url: string,
  setCharacters: Function,
  cardsOnPage: number
) => {
  const fetchData = () => {
    axios.get(url).then((res) => {
      setCharacters(
        res.data
          .filter((character: { name: string }) =>
            character.name.toLowerCase().includes(searchDebounced.toLowerCase())
          )
          .slice(0, cardsOnPage)
      );
    });
  };

  useEffect(() => {
    searchDebounced && fetchData();
  }, [searchDebounced]);
};
