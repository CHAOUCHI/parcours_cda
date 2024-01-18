let hero = {
    s_nom : "Link",
    n_pv : 5,
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
        ennemie.n_pv--;
    }
};

let ennemie = {
    s_nom : "Zombie",
    n_pv : 4,
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
        ennemie.n_pv--;
    }
};