import { useFetch } from '../../hooks/useFetch';
import PokemonsList from '../PokemonsList';
import Spinner from '../Spinner/Spinner';
import './scss/Home.scss';
const Home = () => {
  const { previousPage, nextPage, loading, values } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6'
  );

  return !loading ? (
    <div className="container">
      <PokemonsList
        previousPage={previousPage}
        nextPage={nextPage}
        values={values}
      />
    </div>
  ) : (
    <Spinner />
  );
};

export default Home;
