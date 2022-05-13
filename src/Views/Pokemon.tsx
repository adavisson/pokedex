import React, { FC, useEffect, useState } from "react";

// move this out
type Pokemon = {
  name: string;
};

export const Pokemon: FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = async () => {
    const pokes = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    setPokemon(await pokes.json());
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log({
    pokemon,
  });

  return (
    <>
      <h1>Pokemon</h1>
      {pokemon && <p>{pokemon.name}</p>}
    </>
  );
};

export default Pokemon;
