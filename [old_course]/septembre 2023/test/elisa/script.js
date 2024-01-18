// Déclaration des objets
let hero = {
    s_nom : "Link",
    n_pv : 5,
    n_attaque : 3,
    saluer(personnage){
        console.log("Salutation "+ personnage.s_nom +" je suis "+ this.s_nom +" ! ");
    },
    ficheDePersonnage(){
        return "Nom : "+this.s_nom+" | Pdv : "+this.n_pv;
    },
    soin(n_soin){
        this.n_pv = this.n_pv + n_soin;
    },
    attaquer(enemy){
        enemy.n_pv -= this.n_attaque;
    }
    
};
let enemy = {
    s_nom : "Ganon",
    n_pv : 4,
    n_attaque : 1,
    saluer(personnage){
        console.log("Salutation"+ personnage.s_nom +" je suis "+ this.s_nom +" ! ");
    },
    ficheDePersonnage(){
        return "Nom : "+this.s_nom+" | Pdv : "+this.n_pv;
    },
    soin(n_Soin){
        this.n_pv = this.n_pv + n_Soin;
    },
    attaquer(hero){
        hero.n_pv-=this.n_attaque;
    }
} ;

// Déclaration de la fonction Draw (affichage HTML les infos du héro et de l'ennemie)
function Draw(){
    const element_enemy_name = document.querySelector("#enemy .name");
    element_enemy_name.innerText = "Ganon";

    const element_enemy_pv = document.querySelector("#enemy .pv");
    element_enemy_pv.innerText = "PV : "+enemy.n_pv;

    const element_enemy_attack = document.querySelector("#enemy .attack");
    element_enemy_attack.innerText = "ATK : "+enemy.n_attaque;

    const element_hero_name = document.querySelector("#hero .name");
    element_hero_name.innerText = "Link";

    const element_hero_pv = document.querySelector("#hero .pv");
    element_hero_pv.innerText = "PV : "+hero.n_pv;

    const element_hero_attack = document.querySelector("#hero .attack");
    element_hero_attack.innerText = "ATK : "+hero.n_attaque;
}


// Première affichage des infos au lancement de la page.
Draw();

// COMMANDES DU HERO
const hero_btn_soin = document.querySelector("#hero .btn_soin");
hero_btn_soin.addEventListener("click", function(){
    hero.soin(1);
    Draw();
});
const hero_btn_attack = document.querySelector("#hero .btn_attack");
hero_btn_attack.addEventListener("click", function(){
    hero.attaquer(enemy)
    Draw();
})
// FIN COMMANDES DU HERO

// COMMANDE DE L'ENNEMIE
const enemy_btn_soin = document.querySelector("#enemy .btn_soin");
enemy_btn_soin.addEventListener("click", function(){
    enemy.soin(1);
    Draw();
});
const enemy_btn_attack = document.querySelector("#enemy .btn_attack");
enemy_btn_attack.addEventListener("click", function(){
    enemy.attaquer(hero);
    Draw();
});
// FIN COMMANDE DE L'ENNEMIE
