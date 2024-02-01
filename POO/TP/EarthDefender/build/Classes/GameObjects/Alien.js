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
import { Game } from "../Game.js";
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
var Alien = /** @class */ (function (_super) {
    __extends(Alien, _super);
    function Alien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alien.prototype.init = function () {
        this.setImage(Assets.getAlien());
        var randomPosX = Math.random() * (Game.CANVAS_WIDTH - this.getWidth());
        var randomPosY = -(Math.random() * Game.CANVAS_HEIGHT);
        this.setPosition(randomPosX, randomPosY);
    };
    Alien.prototype.update = function () {
        this.getPosition().y += this.getVitesse() * Math.random();
    };
    Alien.prototype.collide = function (other) {
        if (other == this.game.getPlayer()) {
            console.log("Alien hits Player");
            this.game.over("An alien ate the last defender(the player).");
        }
    };
    Alien.prototype.die = function () {
        this.destroy();
        this.game.decreaseAlienCount();
    };
    return Alien;
}(GameObject));
export { Alien };
