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
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
import { Game } from "../Game.js";
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earth.prototype.init = function () {
        this.setImage(Assets.getEarth());
        this.setVitesse(0);
        this.setWidth(Game.CANVAS_WIDTH);
        this.setPosition(0, Game.CANVAS_HEIGHT - this.getHeight());
        this.setPv(3);
    };
    Earth.prototype.collide = function (other) {
        if (other.constructor.name == "Alien") {
            this.hit();
            if (this.pv <= 0) {
                this.game.over("Earth have been DESTROYED !");
            }
            var alien = other;
            alien.die();
        }
    };
    Earth.prototype.hit = function () {
        this.setPv(this.pv - 1);
    };
    Earth.prototype.setPv = function (pv) {
        this.pv = pv;
        var earthPvTag = document.querySelector(".earth_pv");
        if (earthPvTag) {
            earthPvTag.innerText = this.pv.toString();
        }
        else {
            throw Error("No html tag for earth PV exist.");
        }
    };
    return Earth;
}(GameObject));
export { Earth };
