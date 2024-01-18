let hero = {
    s_nom : "Link",
    n_pv : 5,
    n_attaque : 2,
    saluer(personage){
        console.log("Salutation "+personage.s_nom+" je suis "+this.s_nom+" !");
    },
    attaquer(ennemie){
        console.log(this.s_nom + " attaque !")
        ennemie.n_pv = ennemie.n_pv - this.n_attaque;
        console.log(ennemie.s_nom + " perds"+this.n_attaque+"pv !");
        // ou ennemie.n_pv --;
    },
    soin(n_soin){
        this.n_pv = this.n_pv + n_soin;
        // ou this.n_pv += n_soin;
        console.log(this.s_nom + " gagne "+n_soin+" pv !");
    },
    fiche(){
        return `Nom : ${this.s_nom} | Point de vie : ${this.n_pv}`;
    }
};

let ennemy = {
    s_nom : "Zombie",
    n_pv : 3,
    n_attaque : 2,
    saluer(personage){
        console.log("Salutation "+personage.s_nom+" je suis "+this.s_nom+" !");
    },
    attaquer(ennemie){
        console.log(this.s_nom + " attaque !")
        ennemie.n_pv = ennemie.n_pv - 1;
        console.log(ennemie.s_nom + " perds 1 pv !");
        // ou ennemie.n_pv --;
    },
    soin(n_soin){
        this.n_pv = this.n_pv + n_soin;
        // ou this.n_pv += n_soin;
        console.log(this.s_nom + " gagne "+n_soin+" pv !");
    },
    fiche(){
        return `Nom : ${this.s_nom} | Point de vie : ${this.n_pv}`;
    }
};

/**Déclarations des variables boutons */
/**Pour le hero */
hero.btn = {};      // Ajout d'un attribut btn : un Object vide qui contiendra les ElementHTML boutons du hero
hero.btn.attaquer = document.querySelector("#hero .btn_attack");
hero.btn.soin = document.querySelector("#hero .btn_soin");
/**Pour l'ennemie */
ennemy.btn = {};    // Ajout d'un attribut btn : un Object vide qui contiendra les ElementHTML boutons de l'ennemie
ennemy.btn.attaquer = document.querySelector("#ennemy .btn_attack");
ennemy.btn.soigner = document.querySelector("#ennemy .btn_soin");


/**Ajout des écouteurs d'évenement  */
hero.btn.attaquer.addEventListener("click",function(){
    hero.attaquer(ennemy);
    const image = document.querySelector("#hero img");
    image.classList.add("attaquer");
    setTimeout(function(){
        image.classList.remove("attaquer");
    },250);
    Draw();
});
hero.btn.soin.addEventListener("click",function(){
    hero.soin(1);
    Draw();
});


ennemy.btn.attaquer.addEventListener("click",function(){
    ennemy.attaquer(hero);
    const image = document.querySelector("#ennemy img");
    image.classList.add("attaquer");
    setTimeout(function(){
        image.classList.remove("attaquer");
    },250);
    Draw();
});


ennemy.btn.soin .addEventListener("click",function(){
    ennemy.soin(1);
    Draw();
});


function Draw(){
    // Draw hero
    const tag_hero_name = document.querySelector("#hero .name");
    const tag_hero_pv = document.querySelector("#hero .pv");
    const tag_hero_attack = document.querySelector("#hero .attack");
    tag_hero_name.innerText = hero.s_nom;
    tag_hero_pv.innerText = "PV : "+hero.n_pv;
    tag_hero_attack.innerText = "Attaque : "+hero.n_attaque;

    // Draw ennemy
    const tag_ennemy_name = document.querySelector("#ennemy .name");
    const tag_ennemy_pv = document.querySelector("#ennemy .pv");
    const tag_ennemy_attack = document.querySelector("#ennemy .attack");
    tag_ennemy_name.innerText = ennemy.s_nom;
    tag_ennemy_pv.innerText = "PV : "+ennemy.n_pv;
    tag_ennemy_attack.innerText = "Attaque : "+ennemy.n_attaque;
}

Draw();