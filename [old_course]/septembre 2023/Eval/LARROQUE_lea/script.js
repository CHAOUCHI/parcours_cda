const element_text = document.querySelector(".text");
element_text.innerText = "Nouveau texte";

const element_button = document.querySelector(".changeText");
element_button.addEventListener("click", function(){
element_text.innerText = "Le texte est changé"; 
})

async function getPokemons(){
    const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/30";

    const response = await fetch(url);
    const pokemons = await response.json();
    console.log(pokemons);

}
getPokemons();
