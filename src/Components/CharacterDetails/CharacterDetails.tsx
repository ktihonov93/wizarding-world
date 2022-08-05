import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { useGetCharacterQuery } from "../../features/api/apiSlice";
import "./CharacterDetails.css";

export const CharacterDetails = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useGetCharacterQuery(id);

  const defaultImage =
    "https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg";

  if (isLoading) {
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
      <p>
        wizard:{" "}
        {character.isWizard
          ? "yes"
          : character.isWizard === false
          ? "no"
          : "unknown"}
      </p>
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
