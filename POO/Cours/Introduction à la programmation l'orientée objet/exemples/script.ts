class Animal{
    private name : string;
    private espece : string;

    constructor(name : string, espece : string){
        this.name = name;
        this.espece = espece;
    }

    public info(){
        console.log(this.name,"est un",this.espece);
    }

    public crier(){
        console.log("L'animal crie !");
    }
}
class Chat extends Animal{
    // La classe Chat redifini la méthode crie
    crier(){
        console.log("Miaou !");
    }
}
class Chien extends Animal{
    // La classe Chien redifini la méthode crie
    crier(){
        console.log("Ouaf !");
    }
}

class Zoo{
    private animals : Animal[] = [];
    addAnimal(newAnimal : Animal){
        this.animals.push(newAnimal);
    }
    showAnimals(){
        console.log("Bonjour mes petits :)");
        this.animals.forEach(animal=>{
            animal.crier();
            animal.info();
        });
    }
}
const zoo = new Zoo();
zoo.addAnimal(new Chat("Minette","Felis silvestris"));
zoo.addAnimal(new Chien("Patapouf","Canis lupus"));
zoo.addAnimal(new Animal("Raptor","Velociraptor"));
zoo.showAnimals();
