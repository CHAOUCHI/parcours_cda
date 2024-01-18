// Les commentaires ##########
// Tout ce qui suit un double slashes est un commentaire
// écrivez y en Français ou en Anglais pour expliquer votre code





// Les variables ##################
// Les variables sont des espaces mémoire auquelles on affecte une donnée
let x;              // Décalaration de la variable nommé x
x = 10;             // Affectation de la valeur 10 à la variable x
x                   // Une variable toute seul sera évaluer par JavaScript
x++;                // Incrémentation de 1, equivaut à x = x + 1
x--                 // Décrémentation de 1, equivaut à x = x - 1
// Le plus souvent on evalue un variable dans une fonction
console.log(x)      // => 10





// Les types de données ##########
// JavaScript supporte de nombreux type de donnée

// Le type Number
x = 1;              // Un Number peut être un entier
x = 0.5;            // Ou un nombre décimal
x = -20;            // Voir même un nombre négatif

// le type String - le texte
x = "hello world";  // Un String est toujours contenu entre guillements
x = 'hello world';  // Ou entre simple quotes.

// Boolean
x = true;            // Un Boolean peut être vrai 
x = false;           // Ou faux

// Undefined
x = undefined;      // undefined est la valeur d'une variable non déclaré





// Connaitre le type d'une variable ##########
// La fonction typeof() permet de connaitre le type d'une donnée :
typeof(5);          // => Number
typeof("bonjour");  // => String
let age = 22;
typeof(age);        // => Number





// L'Objet #########
// Le type le plus important en JavaScript est Object

// Un objet contient des variables appelées attribut de l'objet 
let livre = {
    titre : "Le seigneur des anneaux",  // l'attribut titre contient la string "Le seigneur des anneaux"
    auteur : "J.R.R Tolkien"            // l'attribut auteur contient la string "J.R.R Tolkien"
};
// L'acces au attributs ce fait via l' opérateur . ou [] :
livre.titre;                // => "Le seigneur des anneaux"
livre["auteur"];            // => "J.R.R Tolkien" : Une autre manière d'accéder au attribut
livre.annee = 1967;         // Création d'un nouvel attribut





// Array #####################
// Les tableaux (Array) sont des variables qui contiennes plusieurs valeurs.
let eleves = ["Mathieu","John","Billy","Joe","Rémi"];   // Création d'un tableau
// Accès
eleves[0]                       // => "Mathieu" : On accède à un element du tableau par un index numérique
eleves[1]                       // => "John"
// Modification
eleves[0] = "Mathias";          //  Affectation de la valeur "Mathias" à l'element 0 du tableau
eleves[0]                       // => "Mathias"
eleves.length;                   // L'attribut length(taille) permet de connaitre le nombre d'élément du tableau





// Les opérateur arithmétique et logique ##########
// Arithémtique
3 + 6       // => 9 : (Number)
5 - 2       // => 3
3 * 3       // => 9
10 / 3      // => 3.33333
10 % 3      // => 1

// Logique
let x = 2; let y = 3;
x === y     // => false : egalité
x !== y     // => true :  inégalité
x < y       // => true : inférieur à
x <= y       // => true : inférieur ou égal à
x > y       // => false : supérieur à
x >= y       // => false : supérieur ou égal à
"albert" === "roger"    // => false : égalité de String
(x !== y ) === true     // => true

(x === 2) && (y === 3)  // => true : && signfie ET, les deux comparaisons sont VRAI(true)
(x > 3) || (y < 2)      // => false : || signifie OU, aucune des deux comparaisons n'est VRAI(true)
!true                   // => false : ! signfie NOT, il inverse la valeur d'un Boolean
!(x === 2)              // => false : x est égal à 2 est true, l'inverse de true est false





// Fonction ###################
// Les fonctions sont des bouts de code
// réutilisable et paramètrable
function moyenne(a,b,c,d){      // La fonction nommée "moyenne" à 4 paramètres
    let somme = a+b+c+d;      
    return somme/4;             // La fonction retourne un Number
}

moyenne(10,11,12,15);       // => 12 : Appel de la fonction moyenne





// Les méthodes ###################
let hero = {
    nom : "Link",
    pv : 100,
    pointAttaque : 2,

    // Une fonction dans un objet est appelé une méthode
    parler(message){
        console.log(nom +": "+ message);
    }
};
hero.parler("A l'attaque compagnons !");    // => "Link: A l'attaque compagnons !"





// Les structure conditionnel ##################
// La condition SI SINON
let age = 23;
if(age < 18){    
    // Si x est inférieur à y
    console.log("Tu es mineur");
}
else{
    // Si x est supérieur ou égal à y
    console.log("Tu es majeur");
}

// La boucle POUR
let eleves = ["Mathieu","John","Billy","Joe","Rémi"];   // Création d'un tableau
for(let eleve of eleves){       // pour chaque eleve du tableau d'eleves, je crée une variable nommé eleve
    console.log(eleve);         // J'affiche la variable eleve
}
/** Résultat
 * => "Mathieu"
 * => "John"
 * => "Billy"
 * => "Joe"
 * => "Rémi"
 */

// La boucle TANT QUE
let coef = 1;
while(coef <= 5){
    console.log(coef*5);
    coef++;
}
/** Résultat
 * => 5
 * => 10
 * => 15
 * => 20
 * => 25
 */





// Class ###########################
// Les classes sont des types d'objet réutilisable
class Personnage{
    constructor(nom,pv,pointAttaque){
        this.nom = nom;                     // Ici on déclare 3 nouveaux attributs à l'objet
        this.pv = pv;                       // this signifie l'objet, c'est ainsi que l'objet s'appel lui-même, c'est un peu le pronom "Je".
        this.pointAttaque = pointAttaque;   // On affecte les valeurs corhesepondantes au attrbuts de l'objet
    }
    Attaquer(ennemie){
        ennemie.pv = ennemie.pv - this.pointAttaque;  // L'ennemie perd autant de pv que l'attaque de l'objet
    }
}

let hero = new Personnage("Link",100,10);           // Instanciation d'un objet de la classe Personnage
let squelette = new Personnage("Squelette",30,2);   // Instanciation d'un objet de la classe Personnage

console.log(squelette.pv)        // => 30
hero.Attaquer(squelette);        // La méthode Attaquer prend en paramètre l'objet squelette
console.log(squelette.pv)        // => 20





