import { Detail } from "./Detail";
import "./List.css";
export function List({pokemons}){
    const Pokemons = pokemons.map(pokemon=><Detail key={pokemon.id} pokemon={pokemon} />);
    return (
        <div className="list">
            {Pokemons}
        </div>
    );
}