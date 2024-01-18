console.log("hello)");
//change p
const change_text = document.querySelector(".text").innerText="le texte a changé";  //je récpère la balise HTML p et je l'affcte 

//change p au clic du bouton 
const btn_clic = document.querySelector(".btn"); //je récupère la balise HTml du boutton 
btn_clic.addEventListener("click", clik); //affectation au click du bouton de la fonction clik
const text_clik = document.querySelector(".text");  //récupération balise HTML du p

function clik () {    //déclaration de la function 
    text_clik.innerText = "youpie ça fonctionne !";  //af nouveau texte 
};


//afficher dans la console le tableau pokemon 
//
async function requete() {     // async funtion pour faire la requete et demander la réponse 
    const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/10"; //declaration adresse url 
    const response = await fetch (url);   //requete 
    console.log(response);  // réponse HTTP brut 
    const pokemons = await response.json(); //donnée d réponse dans un tableau (réponse attendue)

    for (const pokemon of pokemons) {   //pour chaque pokemon de pokemons 
        console.log (pokemon);        //affichage données pour chaque pokemon 
    }
}
requete();
//for (pokemon of pokemons)





