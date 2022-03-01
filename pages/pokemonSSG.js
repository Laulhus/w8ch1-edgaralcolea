import axios from "axios";
import Image from "next/image";

const PokemonSSG = ({ pokemonList }) => {
  console.log(pokemonList);
  return (
    <div className="container">
      <h2 className="title"> Pokemon CSR List</h2>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={50}
              height={50}
            />
            <p>{pokemon.name}</p>
          </li>
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
