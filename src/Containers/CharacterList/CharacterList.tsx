import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner";
import CharacterCard from "../CharacterCard";
import "./CharacterList.css";

export const CharacterList = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get()
  })

  return (
    <div className="CharacterList">
      <CharacterCard />
    </div>
  );
};
