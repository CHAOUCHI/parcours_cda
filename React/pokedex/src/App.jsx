import { PokemonList } from "./PokemonList";

export function App({pokemons}) {
  
  return (
    <div>
        <PokemonList pokemons = {pokemons}/>
    </div>
  )
}

