let hero = {
    s_nom : "Link",
    n_pv : 5,
    n_attaque : 3,
    saluer(personnage){
    console.log("Salutation "+personnage.s_nom+" je suis "+this.s_nom+" !");
    },
    ficheDePersonnage(){
    return "Nom : "+this.s_nom+" | PdV : "+this.n_pv;
    },
    soin(n_soin){
    this.n_pv = this.n_pv + n_soin;
    },
    attaquer(ennemie){
    ennemie.n_pv -= this.n_attaque;
    }
};

let ennemie = {
    s_nom : "Zombie",
    n_pv : 4,
    n_attaque : 1,
    saluer(personnage){
    console.log("Salutation "+personnage.s_nom+" je suis "+this.s_nom+" !");
    },
    ficheDePersonnage(){
    return "Nom : "+this.s_nom+" | PdV : "+this.n_pv;
    },
    soin(n_soin){
    this.n_pv = this.n_pv + n_soin;
    },
    attaquer(ennemie){
    ennemie.n_pv-=this.n_attaque;
    }
};

const element_hero_name = document.querySelector("#hero .name");
element_hero_name.innerText = hero.s_nom;
