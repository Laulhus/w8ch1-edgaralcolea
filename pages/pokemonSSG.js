import styles from "../styles/pokemon.module.css";
import axios from "axios";
import Image from "next/image";

const PokemonSSG = ({ pokemonList }) => {
  return (
    <div className="container">
      <h2 className="title"> Pokemon SSG List</h2>
      <ul className={styles.pokemon_list}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>{pokemon.ability}</p>
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
