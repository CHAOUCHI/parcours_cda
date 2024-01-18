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


const hero_btn_soin = document.querySelector("#hero .btn_soin");
hero_btn_soin.addEventListener("click",function(){
    console.log("Click sur le bouton soin");
    hero.soin(1); 
    Draw();
});

const hero_btn_attack = document.querySelector("#hero .btn_attack");
hero_btn_attack.addEventListener("click",function(){
    hero.attaquer(ennemie);
    const image = document.querySelector("#hero img");
    image.classList.add("attaquer");
    setTimeout(function(){
        image.classList.remove("attaquer");
    },250);
    Draw();
});

const ennemy_btn_soin = document.querySelector("#ennemy .btn_soin");
ennemy_btn_soin.addEventListener("click",function(){
    ennemie.soin(1); 
    Draw();
});

const ennemy_btn_attack = document.querySelector("#ennemy .btn_attack");
ennemy_btn_attack.addEventListener("click",function(){
    ennemie.attaquer(ennemie);
    const image = document.querySelector("#ennemy img");
    image.classList.add("attaquer");
    setTimeout(function(){
        image.classList.remove("attaquer");
    },250);
    Draw();

});




function Draw(){
    const element_hero_name = document.querySelector("#hero .name");
    const element_hero_pv = document.querySelector("#hero .pv");
    const element_hero_attack = document.querySelector("#hero .attack");
    
    element_hero_name.innerText = hero.s_nom;
    element_hero_pv.innerText = "PV :"+hero.n_pv;
    element_hero_attack.innerText = "ATK :"+hero.n_attaque;

    const element_ennemy_name = document.querySelector("#ennemy .name");
    const element_ennemy_pv = document.querySelector("#ennemy .pv");
    const element_ennemy_attack = document.querySelector("#ennemy .attack");
    
    element_ennemy_name.innerText = ennemie.s_nom;
    element_ennemy_pv.innerText = "PV :"+ennemie.n_pv;
    element_ennemy_attack.innerText = "ATK :"+ennemie.n_attaque;
}
Draw();


ennemie.saluer(hero);