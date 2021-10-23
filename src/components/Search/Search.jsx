import SearchIcon from '@mui/icons-material/Search';
import './scss/Search.scss';

const Search = () => {
  const searchPokemon = (e) => {
    e.preventDefault();
    console.log('Enviando');
  };

  return (
    <div className="header__search">
      <form onSubmit={searchPokemon}>
        <div className="header__search--group">
          <label htmlFor="">
            <input type="search" placeholder="Encontrá tu pokemon... " />
            <SearchIcon className="header__search--group__icon" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Search;
