import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import "./CharacterDetails.css";

export const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://hp-api-marcosmarp.herokuapp.com/api/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
        console.log(res)
      });
  }, [id]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <article className="CharacterDetails">
      <h2>Character Details</h2>
      <p>name: {character.name}</p>
      <img src={character.image} alt="character" />
      <p>gender: {character.gender}</p>
      <p>house: {character.house}</p>
      <p>birthDate: {character.birthDate}</p>
      <p>{character.isWizard ? "Can" : "Can't"} do magic</p>
      <p>ancestry: {character.ancestry}</p>
      <p>eyeColour: {character.eyeColour}</p>
      <p>hairColour: {character.hairColour}</p>
      <p>name of wand wood: {character.wand.wood.name}</p>
      <p>name of wand core: {character.wand.wood.core}</p>
      <p>wand length: {character.wand.length}</p>
      <p>Connection to Hogwarts: {character.isHogwartsStudent? "student" : (character.isHogwartsStaff ? "staff" : "none")}</p>
      <p>actor: {character.actor}</p>
    </article>
  );
};
