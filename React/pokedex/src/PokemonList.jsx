import { Pokemon } from "./Pokemon";
import "./PokemonList.css";
export function PokemonList({pokemons,onClickPokemon}){
    
    return (
        <div className="pokemon_list">
            { pokemons.map(pokemon=><Pokemon pokemon={pokemon} key={pokemon.id} onClickPokemon={(pokemon)=>onClickPokemon(pokemon)}/>) }
        </div>
    );
}