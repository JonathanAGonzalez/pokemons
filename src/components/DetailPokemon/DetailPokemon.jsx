import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './scss/DetailPokemon.scss';

const DetailPokemon = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${parseInt(id)}`)
      .then((response) => {
        response.data.abilities.map((abilitie) =>
          axios.get(abilitie.ability.url).then(({ data }) => {
            data.flavor_text_entries.forEach((data) => {
              if (data.language.name === 'es') {
                setPokemon({
                  loading: false,
                  data: response.data,
                  abilities: data,
                });
              }
            });
          })
        );

        // setPokemon({ loading: false, data: response.data })
      });
  }, [id]);

  return (
    <div className="container__detail">
      {!pokemon.loading && (
        <div>
          <p>{pokemon.data.name}</p>
          <img
            src={pokemon.data.sprites.other.dream_world.front_default}
            alt={pokemon.data.name}
          />
          <p>Tipo de pokemon: {pokemon.data.types[0].type.name}</p>
          <p>Experiencia Base: {pokemon.data.base_experience}</p>
          <p>Caracteristica:{pokemon.abilities.flavor_text}</p>
        </div>
      )}
    </div>
  );
};

export default DetailPokemon;
