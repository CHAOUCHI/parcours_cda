export function Detail({pokemon}){
    return (
        <div>
            <img src={pokemon.sprite} alt={`no internet : ${pokemon.id}`} />
            <p>{pokemon.name}</p>
        </div>
    )
}