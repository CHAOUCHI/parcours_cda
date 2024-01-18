   

// let prix_tshirt = 30;
// let marque_tshirt = "Adidas";
let taille_tshirt = "L";




















// Déclarez l'attribut taille à la velur "L" dans
// l'objet tshirt
let tshirt = { 
    prix : 30, 
    marque : "Adidas"
};
console.log(tshirt);




// Objet
    // attribut OK
    // accès OK
    // method (function)
    // class
let produit = {
    name : "Balais magique",
    categorie : "Ménage",
    prix : 4.5,
    promotion(pourcent){
        this.prix = this.prix * pourcent;
    },
    ficheProduit(){
        // TODO
        // String " Je suis un Balais magique à 4.5€"
    }
};
console.log(produit.ficheProduit());





function somme(a,b){

}





let age = 23;
age = age +1;
age +=1;

price = 5;
price = price * 0.2;
price *= 0.2







produit = {
    name : "Balais magique",
    price : 4.5,
    set prix(price){
        if(typeof(price) !== "number"  || price <= 0){
            return;
        }
        this.price = price;
    },
    get prix(){
        return this.price
    }
};




produit.prix = 3;

produit.prix













let hello = function(){
    console.log("Hello");
}
setTimeout(hello, 5000);












let nomDeLobjet = {
    attribut1 : value,
    attribut2 : value,
    attribut3 : value
};

nomDeLobjet = { attribut1 : value, attribut2 : value, attribut3 : value};






















function promotion(pourcent,prix_tshirt){
    return prix_tshirt * pourcent;
}