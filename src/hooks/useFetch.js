import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { PokeContext } from '../context/PokeContext';

export const useFetch = (url) => {
  const [values, setValues] = useContext(PokeContext);
  const [page, setPage] = useState();
  const { loading, data } = values;

  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await axios.get(url).then((res) => {
        setPage(res);
        return res;
      });

      const next = data.next;
      const previous = data.previous;

      setValues((prev) => ({ ...prev, next: next, previous: previous }));

      const promises = data.results.map(async (pokemon) => {
        try {
          return axios.get(pokemon.url).then((response) => {
            return response.data;
          });
        } catch (error) {
          console.log(error);
        }
      });
      getPokemons(promises);
    };

    const getPokemons = async (promises) => {
      try {
        const results = await Promise.all(promises);
        await setValues((prev) => ({
          ...prev,
          loading: false,
          data: results,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon();
  }, [url, setValues]);
  return {
    loading,
    data,
    values,
    page,
  };
};
