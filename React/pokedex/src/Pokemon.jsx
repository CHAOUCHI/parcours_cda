export function Pokemon({pokemon}){
    return (
        <div>
            <p className="pokemon_id">{pokemon.id}</p>
            <p className="pokemon_name">{pokemon.name}</p>
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
    )
}