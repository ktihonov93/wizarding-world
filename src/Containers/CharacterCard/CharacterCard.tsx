import "./CharacterCard.css";

type AppProps = {
  name: string;
  image: string;
};

export const CharacterCard = ({ name, image }: AppProps) => {
  return (
    <article className="CharacterCard">
      <img src={image} alt="Character"></img>
      <p>{name}</p>
      <button>Подробнее</button>
    </article>
  );
};
