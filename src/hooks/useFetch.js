import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PokeContext } from "../context/PokeContext";
let allPokemons = [];

export const useFetch = (url) => {
  const [values, setValues] = useContext(PokeContext);
  const [page, setPage] = useState(url);
  const { loading, data } = values;
  const nextPage = () => {
    setPage(values.next);
  };

  const previousPage = () => {
    setPage(values.previous);
  };

  useEffect(() => {
    axios.get(page).then((res) => {
      allPokemons = [];
      res.data.results.forEach(({ url }) => {
        axios.get(url).then((response) => {
          allPokemons.push(response.data);
          setValues({
            loading: false,
            next: res.data.next,
            previous: res.data.previous,
            data: allPokemons,
          });
        });
      });
    });
  }, [page, setValues]);

  return {
    previousPage,
    nextPage,
    loading,
    data,
    values,
  };
};
