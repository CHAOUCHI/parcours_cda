//Déclaration de la fonction hero 
let hero = {
    s_nom: "Link",
    n_pv: 5,
    n_attaque: 3,
    saluer(ennemie) {
        console.log("Salutation " + ennemie.s_nom + " je suis " + this.s_nom + " !");
    },
    ficheDePersonnage() {
        return "Nom : " + this.s_nom + " | PdV : " + this.n_pv+ " | PdA "+this.n_attaque;
    },
    soigner(n_soin) {
        this.n_pv += n_soin;
        const img = document.querySelector("#hero img");
        // img.style.visibility="hidden"; si je fais ça sa marche
            // img.classList.add("soin"); là ok mais si après 
            //"soin".setAttribute etc... là non
        img.setAttribute("src","heroSoin.gif");
        setTimeout(function(){
            img.removeAttribute("src","heroSoin.gif");
            img.setAttribute("src","chat.png");
        } ,1000);
    },
    attaquer(ennemie) {
        ennemie.n_pv -= 1;
    //     setTimeout(function(){
    //         image.classList.remove("attaquer");
    //  },250);
        const image = document.querySelector("#hero img"); // J'ai mit mes "const" dans les fonctions attaquer() et soigner(), 
        image.classList.add("attaquer"); // j'ai vu dans la correction que c'est mit au niveau des liens entre actions et bouttons...
        image.style.scale ="1.25"; // mais comme les deux sont reliés, c'est la même chose non?
        setTimeout(function(){  // de toutes façons: ça marche :) 
        image.classList.remove("attaquer");
        image.style.scale="none";
    } ,250);
        }
};


// Déclaration de la fonction ennemie
let ennemie = {
    s_nom: "Zombie",
    n_pv: 5,
    n_attaque: 3,
    saluer(hero) {
        console.log("Salutation " + hero.s_nom + " je suis " + this.s_nom + " !");
    },
    ficheDePersonnage() {
        return "Nom : " + this.s_nom + " | PdV : " + this.n_pv+ " | PdA "+this.n_attaque;
    },
    soigner(n_soin) {
        this.n_pv += n_soin;
        const img = document.querySelector("#ennemy img");

        // Change le gif annemie au click sur le bouton soigner
        img.setAttribute("src","ennemySoin.gif");
        // Annule le retournement du gif
        img.classList.remove("flip");
         setTimeout(function(){
            // Au bout de 1s
            img.setAttribute("src","zombie.gif");
            img.classList.add("flip");
            } ,1000);
    },
    attaquer(hero) {
        hero.n_pv -= 1;
        const image = document.querySelector("#ennemy img"); 
        image.classList.add("attaquer");
        image.style.scale = "1.25";
        setTimeout(function(){
        image.classList.remove("attaquer");
        image.style.scale="none";
        } ,250);
    },
};


// Demande du nom de l'utilisateur:
// doit être situer APRÈS déclaration de hero
hero.s_nom = window.prompt("Quel est votre prénom ?", "ex : Link");

//Affichage de Hero
const element_hero_name = document.querySelector("#hero .name");
element_hero_name.innerText = hero.s_nom;

const element_hero_pv = document.querySelector("#hero .pv");
element_hero_pv.innerText = "PV : " + hero.n_pv;

const element_hero_attack = document.querySelector("#hero .attack");
element_hero_attack.innerText = "PA : " + hero.n_attaque;

//Affichage de ennemie
const element_ennemy_name = document.querySelector("#ennemy .name");
element_ennemy_name.innerText = ennemie.s_nom;

const element_ennemy_pv = document.querySelector("#ennemy .pv");
element_ennemy_pv.innerText = "PV : " + ennemie.n_pv;

const element_ennemy_attack = document.querySelector("#ennemy .attack");
element_ennemy_attack.innerText = "PA : " + ennemie.n_attaque;

const img = document.querySelector("#ennemy img");

//Joindre les bouttons aux actions pour héro
const hero_btn_soin = document.querySelector("#hero .btn_soin");
hero_btn_soin.addEventListener("click",function(){
    hero.soigner(1);
    Draw();
 });

function Draw(){
    return    document.querySelector("#hero .pv"),
    element_hero_pv.innerText = "PV : " + (hero.n_pv);
} ;
    

const hero_btn_attack = document.querySelector("#hero .btn_attack");
hero_btn_attack.addEventListener("click",function(){
    hero.attaquer(ennemie);
    DrawA();
 });

function DrawA(){
    return    document.querySelector("#hero .attack"),
    element_hero_attack.innerText = "PA : " + (hero.n_attaque += 1),
                document.querySelector("#ennemy .pv"),
    element_ennemy_pv.innerText = "PV : " + (ennemie.n_pv)
} ;


//Joindre les bouttons aux actions pour ennemie
const ennemy_btn_soin = document.querySelector("#ennemy .btn_soin");
ennemy_btn_soin.addEventListener("click",function(){
    ennemie.soigner(1);
    MajS();
 });

function MajS(){
    return    document.querySelector("#ennemy .pv"),
    element_ennemy_pv.innerText = "PV : " + (ennemie.n_pv);
} ;
    
const ennemy_btn_attack = document.querySelector("#ennemy .btn_attack");
ennemy_btn_attack.addEventListener("click",function(){
    ennemie.attaquer(hero);
    MaJA();
 });

function MaJA(){
    return    document.querySelector("#ennemy .attack"),
    element_ennemy_attack.innerText = "PA : " + (ennemie.n_attaque += 1),
                document.querySelector("#hero .pv"),
    element_hero_pv.innerText = "PV : " + (hero.n_pv)
} ;

//et la fonction saluer()? la pauvre, elle sert à rien ...



// Pas réussi à faire deux versions
//  function Draw(){
//     if (hero_btn_soin.addEventListener("click")) {
//         return    document.querySelector("#hero .pv"),
//         element_hero_pv.innerText = "PV : " + (hero.n_pv ++);
//     } 
//     else if (hero_btn_attack.addEventListener("click")){
//         return  document.querySelector("#hero .attack"),
//         element_hero_attack.innerText = "PA : " + (hero.n_attaque++);
//     }
//     };