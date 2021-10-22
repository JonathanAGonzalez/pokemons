import React from 'react';
import { ImSearch } from 'react-icons/im';
const Search = () => {
  return (
    <form>
      <label htmlFor="">Buscar</label>
      <input type="search" placeholder="buscador" />
      <ImSearch />
    </form>
  );
};

export default Search;
