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
import { Game } from "../Game.js";
import { GameObject } from "./GameObject.js";
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Star.prototype.init = function () {
        this.setImage(Assets.getStar());
        this.setPosition(Math.random() * Game.CANVAS_WIDTH, Math.random() * Game.CANVAS_HEIGHT);
        this.setVitesse(Math.random() * 0.3);
    };
    Star.prototype.update = function () {
        this.getPosition().y += this.getVitesse();
        if (this.getPosition().y > Game.CANVAS_HEIGHT) {
            this.setPosition(Math.random() * Game.CANVAS_WIDTH, -10);
        }
    };
    return Star;
}(GameObject));
export { Star };
