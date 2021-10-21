import "./scss/Pokemon.scss";
const Pokemon = ({ pokemon }) => {
  const { name, sprites } = pokemon;

  return (
    <div className={`pokemon__${pokemon.types[0].type.name}`}>
      <p>{name}</p>
      <img src={sprites.other.dream_world.front_default} alt={name} />
    </div>
  );
};

export default Pokemon;
