const texte = document.querySelector(".texte"); // Je declare les variables qui me serviront ensuite au début 
const bouton = document.querySelector(".bouton");

texte.innerText = "Je suis le texte changé une première fois"; // Je modifie le texte une première fois grace a innerText et non innerHTML, le texte de base étant : "Je suis le texte de base"

bouton.addEventListener("click",function(){ //addEventListener me permet grace a un evenement (la un click) de faire qqc avec mon document. Ici cela modifiera a nouveau mon texte
    texte.innerText = "Je suis le texte changé grâce au click du bouton";
})

async function attrapezLesTous(){
    const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/10"; // je declare la variable url et je lui assigne le liens de l'api que je vais utiliser 
    const reponse = await fetch(url); //je declare la variable et lui indique d'attendre la reponse du lien indiqué dans le fetch qui sera sous le format json
    const pokemon = await reponse.json(); // convertion pour un format javascrpit 

    console.log(pokemon); //affiche les données dans la console
}

attrapezLesTous(); //j'appelle la fonction pour avoir le resultat affiché