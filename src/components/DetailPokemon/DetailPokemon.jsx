import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import axios from 'axios';
import './scss/DetailPokemon.scss';
import Spinner from '../../elements/Spinner';

const DetailPokemon = () => {
  let { id } = useParams();
  const [{ loading, data, abilities }, setPokemon] = useState({
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
      });
  }, [id]);

  return !loading ? (
    <div className="pokemons__container container__detail">
      <Link to="/">
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
            <p>
              <strong>Nombre del pokemon: </strong>
              {data.name}
            </p>
            <hr />
            <p>
              <strong>Tipo de pokemon: </strong>
              {data.types[0].type.name}
            </p>
            <hr />
            <p>
              <strong>Experiencia Base: </strong>
              {data.base_experience}
            </p>
            <hr />
            <p>
              <strong>Caracteristica: </strong>
              <br />
              {abilities.flavor_text}
            </p>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default DetailPokemon;
