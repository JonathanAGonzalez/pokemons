import { useContext } from 'react';
import { PokeContext } from '../../context/PokeContext';
import Button from '../../elements/Button';
import Spinner from '../../elements/Spinner';
import Pokemon from '../Pokemon';
import './scss/PokemonsList.scss';
const PokemonsList = ({ values, setPage, page }) => {
  const pokeContext = useContext(PokeContext);
  const [{ data, loading, next, previous }] = pokeContext;

  const nextPage = () => {
    setPage(next);
  };

  const previousPage = () => {
    if (previous !== 'null') setPage(previous);
  };

  return !loading ? (
    <div>
      <div className="pokemons__container">
        <div className="pokemons">
          <h4>Listado de pokemons</h4>
          {data.map((poke) => (
            <Pokemon key={poke.name} pokemon={poke} values={values} />
          ))}
        </div>
        <div className="pokemons__buttons">
          <Button action={previousPage} text="atras" previous={previous} />
          <Button action={nextPage} text="siguiente" next={next} />
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default PokemonsList;
