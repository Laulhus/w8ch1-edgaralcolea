import react from "react";
import { React, useState } from "react";

const PokemonISR = () => {
  const [pokemonList, setPokemonList] = useState([]);

  react.useEffect(async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    const { results } = await response.json();

    setPokemonList(results);
  }, []);

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

export default PokemonISR;
