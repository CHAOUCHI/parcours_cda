let hero = {
    s_nom : "Link",
    n_pv : 10,
    saluer(){
        console.log("Salutation je suis "+ this.s_nom +"!");
    },
    ficheDePersonnage(){
        let fiche = "Nom : "+this.s_nom+" | PdV : "+this.n_pv;
        return fiche;
    },
    soin(n_montantDuSoin){
        // soigner la vie du this
        this.n_pv = this.n_pv + n_montantDuSoin;
    }
};

let ennemie = {
    s_nom : "Zombie",
    n_pv : 3,
    saluer(){
        console.log("Salutation je suis "+ this.s_nom +"!");
    },
    ficheDePersonnage(){
        let fiche = "Nom : "+this.s_nom+" | PdV : "+this.n_pv;
        return fiche;
    },
    soin(n_montantDuSoin){
        // soigner la vie du this
        this.n_pv = this.n_pv + n_montantDuSoin;
    }
};

console.log(this.ficheDePersonnage());
this.soin(99);
console.log(this.ficheDePersonnage());


