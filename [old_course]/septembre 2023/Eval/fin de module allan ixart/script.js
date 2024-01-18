// let ticket ={
//     nomfilm: "batman",
//     prix:29,
//     numerosalle:34
    
// }
// let nom = "ixart" 

// let messageafficher = ' bonjour ' + nom + ' votre film '+ ticket.nomfilm + ' est en salle ' + ticket.numerosalle
// console.log(messageafficher);


// console.log(ticket);
// console.log(nom);





// const mesfilms =["boolywhood","jurasik park","indiana jones"]
// console.log(mesfilms.length)






// let motTapeOk = true // Essayez de mettre false à la place de true

// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//     console.log("Échec, le mot n'est pas correct")
// }



// let monNombre = 1
// // monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

// function afficheUnNombre() {
//     let monNombreLocal = 2
//    // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
//     console.log("Intérieur de la fonction : ")
//     console.log(monNombre) // monNombre est accessible
//     console.log(monNombreLocal) // monNombreLocal est accessible
// }

// afficheUnNombre() 
// console.log("Extérieur de la fonction : ")
// console.log(monNombre) // monNombre est accessible
// console.log(monNombreLocal) // monNombreLocal n’est pas accesssible

////////// debut de module ////////////////



p=document.querySelector("p");// je selectione avec queryselector la balise (p) ne pas oublié le point , a la fin 
p.innerText = "bonjour c'est moi";// je change avec innerTex la balise (p) faut pas oublié le camelcase et le point virgule a fin 

console.log(p);// et on affiche le resultat sur la console 


p=document.querySelector("p"); // pareil on selectione la balise (p) avec queryselector ne pas oublié le camelcase 
button=document.querySelector("button");// pareil on selectionne le button avec queryselector ne pas oublié le camelcase et le point , a la fin 

button.addEventListener("click",function () {// ne pas oublié le point apres button / je vx mettre un evenement a button avec une fonction 
    p.innerText="le bateau est parti"// et par la suite je veux que le texte soit changé quand je clik pour ca je doit utiliser innerText et mettre la phrase qu'on veut
    
;});

console.log(button);// affichage sur la console avec console.log et voir le resultat





async function chercherpokemons() { // ne surtout pas oublié de le mettre asynchrone sinon ca fonctionne pas 
    const url = ("https://pokebuildapi.fr/api/v1/pokemon/limit/50")// on envoi la requete 

    const response = await fetch(url); // on recoit la requete 

    const pokemons = await response.json();// on traduit avec json 

    console.log(pokemons);
    console.log(pokemons[50]);// on affiche les pokemons la 50 mais on px tout a fait en prendre 100 en changeant le 50 dans url  a 100
    
}
chercherpokemons();