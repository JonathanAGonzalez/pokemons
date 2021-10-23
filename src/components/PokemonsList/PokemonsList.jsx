import { useContext } from 'react';
import { PokeContext } from '../../context/PokeContext';
import Button from '../../elements/Button';
import Pokemon from '../Pokemon';
import './scss/PokemonsList.scss';
const PokemonsList = ({ previousPage, nextPage, values }) => {
  const pokeContext = useContext(PokeContext);
  const [{ data, loading }] = pokeContext;

  return !loading ? (
    <div>
      <div className="pokemons__container">
        <div className="pokemons">
          <h4>Listado de pokemons</h4>
          {data.map((poke) => (
            <Pokemon
              key={poke.name}
              pokemon={poke}
              previousPage={previousPage}
              nextPage={nextPage}
              values={values}
            />
          ))}
        </div>
        <div className="pokemons__buttons">
          <Button
            action={previousPage}
            text="atras"
            disable={values.previous}
          />
          <Button action={nextPage} text="siguiente" disable={values.next} />
        </div>
      </div>
    </div>
  ) : (
    <div className="pokemons__loading">
      <p>Cargando...</p>
    </div>
  );
};

export default PokemonsList;
