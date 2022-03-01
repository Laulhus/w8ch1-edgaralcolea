import axios from "axios";

const PokemonSSG = ({ pokemonList }) => {
  return (
    <div className="container">
      <h2 className="title"> Pokemon CSR List</h2>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_MY_API_URL);
  const { data: pokemonList } = res;
  return {
    props: { pokemonList },
  };
};

export default PokemonSSG;
