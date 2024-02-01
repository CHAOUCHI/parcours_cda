import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject(game) {
        this.game = game;
        this.position = { x: 0, y: 0 };
        this.vitesse = 2;
        this.setImage(Assets.getDefault());
        this.init();
    }
    // Public methods
    // Called only one time
    GameObject.prototype.init = function () {
        console.log("Init game object");
    };
    // Called each frame
    GameObject.prototype.update = function () {
    };
    // Called on collition
    GameObject.prototype.collide = function (other) {
    };
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
        this.height = this.image.height;
        this.width = this.image.width;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.setPosition = function (x, y) {
        this.position = { x: x, y: y };
    };
    GameObject.prototype.getWidth = function () {
        return this.width;
    };
    GameObject.prototype.setWidth = function (width) {
        this.width = width;
    };
    GameObject.prototype.getHeight = function () {
        return this.height;
    };
    GameObject.prototype.setHeight = function (height) {
        this.height = height;
    };
    GameObject.prototype.getVitesse = function () {
        return this.vitesse;
    };
    GameObject.prototype.setVitesse = function (vitesse) {
        this.vitesse = vitesse;
    };
    GameObject.prototype.destroy = function () {
        console.log(this.game.getGameObjects());
        this.game.destroy(this);
    };
    GameObject.prototype.overlap = function (other) {
        if (
        // Check x axis overlap
        (other.left() <= this.left() && this.left() <= other.right()
            ||
                other.left() <= this.right() && this.right() <= other.right()
            ||
                this.left() <= other.left() && other.left() <= this.right()
            ||
                this.left() <= other.right() && other.right() <= this.right())
            &&
                (
                // check y axis overlap
                other.top() <= this.top() && this.top() <= other.bottom()
                    ||
                        other.top() <= this.bottom() && this.bottom() <= other.bottom()
                    ||
                        this.top() <= other.top() && other.top() <= this.bottom()
                    ||
                        this.top() <= other.bottom() && other.bottom() <= this.bottom())) {
            return true; // They overlap
        }
        else {
            return false; // They do not overlap
        }
    };
    GameObject.prototype.top = function () {
        return this.position.y;
    };
    GameObject.prototype.bottom = function () {
        return this.position.y + this.getHeight();
    };
    GameObject.prototype.left = function () {
        return this.position.x;
    };
    GameObject.prototype.right = function () {
        return this.position.x + this.getWidth();
    };
    return GameObject;
}());
export { GameObject };
