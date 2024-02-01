import { Alien } from "./GameObjects/Alien.js";
import { Input } from "./Input.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Earth } from "./GameObjects/Earth.js";
var Game = /** @class */ (function () {
    function Game() {
        this.gameObjects = [];
        this.nbMaxAlien = 10;
        this.nbRemainingAlien = this.nbMaxAlien;
        var canvas = document.querySelector("canvas");
        canvas.height = Game.CANVAS_HEIGHT;
        canvas.width = Game.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    // Public methods
    Game.prototype.start = function () {
        for (var i = 0; i < Math.random() * (100 - 20) + 20; i++) {
            this.gameObjects.push(new Star(this));
        }
        this.earth = new Earth(this);
        this.gameObjects.push(this.earth);
        for (var i = 0; i < this.nbMaxAlien; i++) {
            this.gameObjects.push(new Alien(this));
        }
        this.player = new Player(this);
        this.gameObjects.push(this.player);
        Input.listenPlayerInput();
        this.gameLoop();
    };
    Game.prototype.getGameObjects = function () {
        return this.gameObjects;
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.instanciate = function (newGameObject) {
        this.gameObjects.push(newGameObject);
    };
    Game.prototype.destroy = function (gameObjectToDestroy) {
        var _this = this;
        this.gameObjects.forEach(function (gameObject, i) {
            if (gameObjectToDestroy === gameObject) {
                _this.gameObjects.splice(i, 1);
            }
        });
    };
    Game.prototype.decreaseAlienCount = function () {
        this.nbRemainingAlien--;
        if (this.nbRemainingAlien <= 0) {
            this.win();
        }
    };
    Game.prototype.over = function (reason) {
        if (reason === void 0) { reason = "You are bad at video game."; }
        alert("GAME OVER : " + reason);
        location.reload();
    };
    Game.prototype.win = function () {
        alert("WIN !");
        location.reload();
    };
    // Private methods
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getWidth(), gameObject.getHeight());
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        setInterval(function () {
            // Clear context
            _this.context.clearRect(0, 0, Game.CANVAS_WIDTH, Game.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, Game.CANVAS_WIDTH, Game.CANVAS_HEIGHT);
            // Draw and update every gameobjects
            _this.gameObjects.forEach(function (gameObject, i) {
                gameObject.update();
                _this.draw(gameObject);
                _this.checkCollisionWithAllGameobjectFrom(gameObject);
            });
            _this.updateUI();
        }, 10);
    };
    /**
     * Check if the provided gameObject collide with any of the instanciate gameObjects.
     * @param gameObject
     */
    Game.prototype.checkCollisionWithAllGameobjectFrom = function (gameObject) {
        this.gameObjects.forEach(function (other) {
            if (other !== gameObject) {
                if (gameObject.overlap(other)) {
                    gameObject.collide(other);
                }
            }
        });
    };
    Game.prototype.updateUI = function () {
        var remainingAlien = document.querySelector(".remain_alien");
        remainingAlien.innerText = "".concat(this.nbRemainingAlien, " / ").concat(this.nbMaxAlien);
    };
    // Public attributs
    Game.CANVAS_WIDTH = 1300;
    Game.CANVAS_HEIGHT = 600;
    return Game;
}());
export { Game };
