import "./Pokemon.css";
export function Pokemon({pokemon,onClickPokemon = ()=>{}}){
    if(!pokemon) return null;
    return (
        <div className="pokemon" onClick={()=>{onClickPokemon(pokemon)}}>
            <p className="pokemon_id">{pokemon.id}</p>
            <p className="pokemon_name">{pokemon.name}</p>
            <img className="pokemon_image" src={pokemon.image} alt={pokemon.name} />
        </div>
    )
}