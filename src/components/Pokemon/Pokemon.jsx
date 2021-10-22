import { Link } from 'react-router-dom';

import './scss/Pokemon.scss';
const Pokemon = ({ pokemon }) => {
  const { name, sprites, id } = pokemon;

  return (
    <div className={`pokemon pokemon__${pokemon.types[0].type.name}`}>
      <p>{name}</p>
      <img src={sprites.other.dream_world.front_default} alt={name} />
      <Link to={`/detail/${id}`}>Ver más</Link>
    </div>
  );
};

export default Pokemon;
