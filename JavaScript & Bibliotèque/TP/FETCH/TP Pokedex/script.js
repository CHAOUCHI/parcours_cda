
// Je récupère le contenu HTML du template. Je vais pouvoir le cloner à ma guise pour fabriquer de nouveaux pokemons
const templatePokemon = document.querySelector("template").content;

// Je recupere le container. Je vais pouvoir y placer des pokemons clonés à partir du template
const container = document.querySelector(".container");

// J'appel la fonction asyncrone getPokemons
getPokemons("https://pokebuildapi.fr/api/v1/pokemon/limit/100");

async function getPokemons(url){
    // La requete HTTP(fetch) me renvoi une reponse après avoir attendu la réponse
    const response = await fetch(url);          
    
    // La méthode json() me renvoi des objets pokemon après avoir fini de traiter la réponse
    const pokemons = await response.json();     
    
    // Pour chaque pokemon du tableau de pokemons
    for (const pokemon of pokemons) {
        // Je clone un nouvel élément à partir du HTML ecrit dans le <template>
        const newElement = templatePokemon.cloneNode(true);

        // Je modifie le nouvel élément HTML
        newElement.querySelector(".name").innerText = pokemon.name;             // Le nom du pokemon
        newElement.querySelector(".pokedexId").innerText = pokemon.pokedexId;   // L'ID du pokemon
        newElement.querySelector("img").setAttribute("src",pokemon.image);      // L'image du pokemon

        // J'affiche ce nouvelle élément en le placant dans le container 
        container.appendChild(newElement);
    }
}

async function faireUneRequete(){
    const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";
    const response = await fetch(url);
    console.log(response);			      // La response HTTP brute
    const monstres = await response.json();  // Les données de la réponse dans un tableau

    for (const monstre of monstres) {
        console.log(monstre);
    }

}
faireUneRequete();