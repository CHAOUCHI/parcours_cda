const buttonText = document.querySelector("button");
buttonText.addEventListener("click", function() {
    document.querySelector("p").innerText = "Je suis le texte qui te dit au revoir."
});

async function getPokemons(url){
    const response = await fetch(url);
    const pokemons = await response.json(); 
    console.log(pokemons);
}
getPokemons("https://pokebuildapi.fr/api/v1/pokemon/limit/10");