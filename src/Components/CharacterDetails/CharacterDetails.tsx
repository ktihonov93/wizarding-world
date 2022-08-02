import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import "./CharacterDetails.css";

type Character = {
  name: string;
  image: string;
  gender: string;
  house: string;
  birthDate: string;
  isWizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: {
      name: string;
      core: string;
    };
    length: string;
  };
  isHogwartsStudent: boolean;
  isHogwartsStaff: boolean;
  actor: string;
};

export const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const defaultImage = "https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg"

  useEffect(() => {
    axios
      .get(`https://hp-api-marcosmarp.herokuapp.com/api/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
        console.log(res);
      });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!character) {
    return null;
  }

  return (
    <article className="CharacterDetails">
      <h2>Character Details</h2>
      <p>name: {character.name || "unknown"}</p>
      <img src={character.image || defaultImage} alt="character" />
      <p>gender: {character.gender || "unknown"}</p>
      <p>house: {character.house || "unknown"}</p>
      <p>birthDate: {character.birthDate || "unknown"}</p>
      <p>wizard: {character.isWizard ? "yes" : (character.isWizard === false ? "no" : "unknown")}</p>
      <p>ancestry: {character.ancestry || "unknown"}</p>
      <p>eyeColour: {character.eyeColour || "unknown"}</p>
      <p>hairColour: {character.hairColour || "unknown"}</p>
      <p>name of wand wood: {character.wand?.wood?.name || "unknown"}</p>
      <p>name of wand core: {character.wand?.wood?.core || "unknown"}</p>
      <p>wand length: {character?.wand?.length || "unknown"}</p>
      <p>
        Connection to Hogwarts:{" "}
        {character.isHogwartsStudent
          ? "student"
          : character.isHogwartsStaff
          ? "staff"
          : "none"}
      </p>
      <p>actor: {character.actor || "unknown"}</p>
    </article>
  );
};
