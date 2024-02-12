import { useState } from "react";
import { PokemonList } from "./PokemonList";
import { PokemonDetail } from "./PokemonDetail";
import { SearchBar } from "./SearchBar";
import "./App.css";

export function App({pokemons}) {
  const [currentPokemon,setCurrentPokemon] = useState(pokemons[0]);
  let evolutionId = null;
  if(currentPokemon.apiEvolutions.length > 0){
    evolutionId = currentPokemon.apiEvolutions[0].pokedexId -1;
  }
  
  function searchPokemon(event){
    const name = event.target.value;
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
    .then(res=>res.json())
    .then(pokemon=>{
      if(pokemon){
        setCurrentPokemon(pokemon);
      }
    });
  }

  return (
    <div className="app">
        <PokemonList pokemons = {pokemons} onClickPokemon={(newPokemon)=>{ setCurrentPokemon(newPokemon) }}/>
        <div className="col-2">
          <SearchBar onSearch={searchPokemon}/>
          <PokemonDetail pokemon={currentPokemon} evolution={evolutionId ?pokemons[evolutionId]:null} onClickPokemon={(newPokemon)=>{ setCurrentPokemon(newPokemon) }}/>
        </div>
    </div>
  )
}

