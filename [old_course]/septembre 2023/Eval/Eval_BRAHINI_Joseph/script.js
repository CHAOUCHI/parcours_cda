const p = document.querySelector("p");
p.innerText="Hello"
const button = document.querySelector("button")
button.addEventListener("click",function(){
    p.innerText = "Clické"

});


const url =("https://pokebuildapi.fr/api/v1/pokemon/limit/10");
affichePokemons(url);
async function affichePokemons(url){
    const response = await fetch(url)
    const pokémons = response.json();
    console.log(pokémons);
};
