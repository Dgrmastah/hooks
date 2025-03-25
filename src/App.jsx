import React from "react";
import useFetchCharacters from "./hooks/useFecthCharacters";

const App = () => {

  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {data: pokemonData, loading: pokemonLoading, error: pokemonError} = useFetchCharacters(urlPokemon)
  const {data: rickData, loading:rickLoading, error: rickError} = useFetchCharacters(urlRick)

  return (
    <div>
      <h1>Hook de rick&morty y Pokemon</h1>
      <h2>Personaje de Pokemon</h2>
      {pokemonLoading && <p>Cargando pokemon</p>}
      {pokemonError && <p>{pokemonError}</p>}
      {pokemonData && (
        <>
        <p>{pokemonData.name}</p>
        <img src = {pokemonData.sprites.front_default} alt={pokemonData.name}/>
        </>
      )}
      
      <h2>Personaje de Rick and Morty</h2>
      {rickLoading && <p>Cargando personaje de Rick sand morty</p>}
      {rickError && <p>{rickError}</p>}
      {rickData && (
        <>
        <p>{rickData.name}</p>
        <img src={rickData.image} alt = {rickData.name}/>
        </>
      )}
    </div>
    )
}

export default App;