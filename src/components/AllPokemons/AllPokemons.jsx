import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Pokemon from '../Pokemon';

const AllPokemons = () => {
  const [pag, setPag] = useState(12);
  const { data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pag}`
  );

  const handlePage = () => {
    setPag(pag + 5);
  };

  return (
    <div className="pokemons__container">
      <div className="pokemons">
        {data.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
        <button
          style={{ width: '100%' }}
          className="container__detail--link"
          onClick={handlePage}
        >
          Cargar más
        </button>
      </div>
    </div>
  );
};

export default AllPokemons;
