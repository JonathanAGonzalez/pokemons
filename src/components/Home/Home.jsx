import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import Spinner from "../Spinner/Spinner";
let initialState = {
  loading: true,
  data: [],
};

const Home = () => {
  const [values, setValues] = useState(initialState);
  const { loading, data } = values;
  const getOnePokemon = async ({ pages, url }) => {
    await axios.get(url).then((response) => {
      setValues((prev) => ({
        loading: false,
        pages: pages.data,
        data: [...prev.data, response.data],
      }));
    });
  };

  const nextPage = () => {
    console.log(values);
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      res.data.results.forEach(({ url }) => {
        getOnePokemon({ pages: res, url });
      });
    });
  }, []);
  console.log(values);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="pokemon__container">
          <button onClick={nextPage}>Siguiente</button>
          {data.map((poke) => (
            <Pokemon key={poke.name} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
