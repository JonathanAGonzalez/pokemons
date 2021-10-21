import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";
import Spinner from "../Spinner/Spinner";
let initialState = {
  loading: true,
  data: [],
};

const Home = () => {
  const [{ loading, data }, setValues] = useState(initialState);

  const getOnePokemon = async (url) => {
    await axios.get(url).then((response) => {
      setValues((prev) => ({
        loading: false,
        data: [...prev.data, response.data],
      }));
    });
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      res.data.results.forEach(({ url }) => {
        getOnePokemon(url);
      });
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="pokemon__container">
          {data.map((poke) => (
            <Pokemon key={poke.name} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
