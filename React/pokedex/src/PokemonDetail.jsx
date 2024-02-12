import { Pokemon } from "./Pokemon"
import "./PokemonDetail.css";

export function PokemonDetail({pokemon, evolution, onClickPokemon}){
    return (
        <div className="pokemon_detail">
            <div className="card">
                <p className="pokemon_id">n°{pokemon.id}</p>
                <img src={pokemon.image} alt={pokemon.name} className="pokemon_image" />
                <h2 className={pokemon.name}>{pokemon.name}</h2>
                <p className="types_heading">Types</p>
                <div className="types">
                    { pokemon.apiTypes.map((type,i)=><img src={type.image} alt={type.name} key={i}/>) }
                </div>
            </div>
            <div className="evolution">
                <h2>Evolution</h2>
                <Pokemon pokemon={evolution} onClickPokemon={(pokemon)=>onClickPokemon(pokemon)}/>
            </div>
        </div>
    )
}