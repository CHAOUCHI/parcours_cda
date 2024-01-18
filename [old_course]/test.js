let nom = prompt("Salutation voyage, quel est votre nom ?[nom]");
let age = prompt("Et votre age ?[age]");
let vie = Number(prompt("Etes vous en bonne santé ? [vie]"));
let metier = prompt("Quel est votre profession ? [metier]");
let niveau = Number(prompt("Etes vous experimenté? [niveau]"));

let hero = {
    nom : nom,
    age : age,
    vie : vie,
    metier : metier,
    niveau : niveau,
};
console.log("Bienvenu ${hero.nom}! ${hero.metier} de niveau ${hero.niveau}. Vous avez ${hero.age} ans et ${hero.vie} points de vie !");