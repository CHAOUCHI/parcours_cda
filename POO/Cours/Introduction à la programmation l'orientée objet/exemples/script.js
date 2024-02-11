var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, espece) {
        this.name = name;
        this.espece = espece;
    }
    Animal.prototype.info = function () {
        console.log(this.name, "est un", this.espece);
    };
    Animal.prototype.crier = function () {
        console.log("L'animal crie !");
    };
    return Animal;
}());
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // La classe Chat redifini la méthode crie
    Chat.prototype.crier = function () {
        console.log("Miaou !");
    };
    return Chat;
}(Animal));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // La classe Chien redifini la méthode crie
    Chien.prototype.crier = function () {
        console.log("Ouaf !");
    };
    return Chien;
}(Animal));
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.animals = [];
    }
    Zoo.prototype.addAnimal = function (newAnimal) {
        this.animals.push(newAnimal);
    };
    Zoo.prototype.showAnimals = function () {
        console.log("Bonjour mes petits :)");
        this.animals.forEach(function (animal) {
            animal.crier();
            animal.info();
        });
    };
    return Zoo;
}());
var zoo = new Zoo();
zoo.addAnimal(new Chat("Minette", "Felis silvestris"));
zoo.addAnimal(new Chien("Patapouf", "Canis lupus"));
zoo.addAnimal(new Animal("Raptor", "Velociraptor"));
zoo.showAnimals();
