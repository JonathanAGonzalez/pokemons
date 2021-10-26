import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PokemonsList from '../PokemonsList';
import Spinner from '../../elements/Spinner';
import './scss/Home.scss';

const Home = () => {
  const [page, setPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=6'
  );
  const [title, setTitle] = useState('Cargando...');
  const { loading, values } = useFetch(page);

  useEffect(() => {
    const getTitle = async () => {
      setTitle('Pokemon || Home');
    };
    getTitle();
  }, []);

  return !loading ? (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container">
        <PokemonsList values={values} setPage={setPage} page={page} />
      </div>
    </HelmetProvider>
  ) : (
    <Spinner />
  );
};

export default Home;
