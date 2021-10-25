import { Link } from 'react-router-dom';
import './scss/Pokemon.scss';

const Pokemon = ({ pokemon }) => {
  const { name, sprites, id, base_experience } = pokemon;

  let type = pokemon.types[0].type.name;
  let sprite = sprites.other.dream_world.front_default;
  return (
    <div className={`pokemon pokemon__${pokemon.types[0].type.name}`}>
      <h2>{name}</h2>
      <div className="pokemon__image">
        <img src={sprite} alt={name} />
      </div>
      <div className="pokemon__text">
        <div>
          <h5>Experience: {base_experience} XP</h5>
        </div>
        <div>
          <h5>
            Type of pokemon:
            <span className="pokemon__text--span">{type}</span>
          </h5>
        </div>
      </div>
      <div className="pokemon__bg"></div>
      <Link to={`/detail/${id}`}>Ver más</Link>
    </div>
  );
};

export default Pokemon;
