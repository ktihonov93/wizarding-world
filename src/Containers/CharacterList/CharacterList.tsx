import CharacterCard from "../CharacterCard";
import "./CharacterList.css";

type Characters = [
  {
    name: string;
    image: string;
    id: string;
  }
];

export const CharacterList = (characters: Characters) => {
  return (
    <section className="CharacterList">
      {characters.map((el) => (
        <CharacterCard key={el.id} id={el.id} name={el.name} image={el.image} />
      ))}
    </section>
  );
};
