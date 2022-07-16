import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner";
import CharacterCard from "../CharacterCard";
import "./CharacterList.css";

export const CharacterList = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://hp-api-marcosmarp.herokuapp.com/api/characters`
      )
      .then((res) => {
        setCharacters(res.data.slice(0, 12));
        setLoading(false);
        //console.log(res);
      });
      
    
  }, [offset]);

  return loading ? <LoadingSpinner /> : (
    <section className="CharacterList">
      {characters.map((el) => (
        <CharacterCard key = {el.id} name = {el.name} image = {el.image} />
      ))}
    </section>    
  );
};
