import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import PokemonsList from '../PokemonsList';
import Spinner from '../Spinner/Spinner';
import './scss/Home.scss';
const Home = () => {
  const [page, setPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6'
  );
  const { loading, values } = useFetch(page);

  return !loading ? (
    <div className="container">
      <PokemonsList values={values} setPage={setPage} page={page} />
    </div>
  ) : (
    <Spinner />
  );
};

export default Home;
