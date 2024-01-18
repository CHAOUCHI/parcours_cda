const buttonText = document.querySelector("button");
buttonText.addEventListener("click", function() {
    document.querySelector("p").innerText = "laboriosam sit atque eum excepturi, modi laborum enim vero voluptatum, explicabo adipisci fugit rem quae praesentium. Nobis tempora aliquam modi cupiditate."
});

async function getPokemons(url){
    const response = await fetch(url);
    const pokemons = await response.json(); 
    console.log(pokemons);
}
getPokemons("https://pokebuildapi.fr/api/v1/pokemon/limit/10");