import './CharacterCard.css';

export const CharacterCard = ( o: { name: string, image: string }) => {
  return (
    <article className='CharacterCard'>
        <img src={o.image} alt='Character'></img>
        <p>{o.name}</p>
        <button>Подробнее</button>
    </article>
  )
}
