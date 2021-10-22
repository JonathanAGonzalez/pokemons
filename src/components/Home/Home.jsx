import Button from '../../elements/Button';
import { useFetch } from '../../hooks/useFetch';

import Pokemon from '../Pokemon';
import Spinner from '../Spinner/Spinner';
import './scss/Home.scss';
const Home = () => {
  const { previousPage, nextPage, loading, data, values } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6'
  );

  return !loading ? (
    <div className="container">
      <div>
        <Button action={previousPage} text="atras" disable={values.previous} />
        <Button action={nextPage} text="siguiente" disable={values.next} />
        <div className="pokemon__container">
          {data.map((poke) => (
            <Pokemon key={poke.name} pokemon={poke} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Home;
