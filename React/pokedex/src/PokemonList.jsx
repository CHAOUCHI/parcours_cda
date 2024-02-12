export function PokemonList({pokemons}){
    
    return (
        <div>
            {pokemons.map(pokemon=><Pokemon pokemon={pokemon}/>)}
        </div>
    );
}