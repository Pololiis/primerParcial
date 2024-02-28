import style from './styles/card.module.css'

const Card = ({name, pokemon}) => {
  return (
    <div className={style.container}>
      <p>Entrenador: {name}</p>
      <p>Pokémon: {pokemon}</p>
    </div>
  )
}

export default Card