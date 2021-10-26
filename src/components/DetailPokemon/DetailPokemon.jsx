import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import Spinner from '../../elements/Spinner';
import Characteristic from '../Characteristic';
import './scss/DetailPokemon.scss';

const DetailPokemon = () => {
  let { id } = useParams();
  const [{ loading, data, abilities }, setPokemon] = useState({
    loading: true,
    data: {},
  });

  const abilitiesMap = () => {
    return data.abilities.map(({ ability }) => (
      <li key={ability.name}>{ability.name}</li>
    ));
  };

  const movesMap = () => {
    return data.moves.map(({ move }, index) => {
      let name = move.name[0].toUpperCase().concat(move.name.slice(1));
      let i = 5;
      if (index <= i) {
        return <li key={move.name}>{name}</li>;
      } else {
        return null;
      }
    });
  };

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
      });
  }, [id]);

  return !loading ? (
    <HelmetProvider>
      <Helmet>
        <title>Pokemon || {data.name}</title>
      </Helmet>
      <div className="pokemons__container container__detail">
        <Link to="/" className="container__detail--link">
          <GrFormPreviousLink />
          Volver
        </Link>
        {!loading && (
          <div className="container__detail--item">
            <h3>{data.name}</h3>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
            />
            <div className="container__detail--text">
              <Characteristic
                title="Nombre del pokemon"
                characteristic={data.name}
              />
              <Characteristic
                title="Tipo de Pokemon"
                characteristic={data.types[0].type.name}
              />
              <Characteristic
                title="Experiencia Base"
                characteristic={data.base_experience}
              />
              <Characteristic
                title="Caracteristica"
                characteristic={abilities.flavor_text}
              />
              <Characteristic
                title="Habilidades"
                characteristic={abilitiesMap()}
              />
              <Characteristic title="Movimientos" characteristic={movesMap()} />
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  ) : (
    <Spinner />
  );
};

export default DetailPokemon;
