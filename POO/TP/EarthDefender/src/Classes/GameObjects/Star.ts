import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { GameObject } from "./GameObject.js";

export class Star extends GameObject{
    public init(){
        this.setImage(Assets.getStar());
        this.setPosition(
            Math.random() * Game.CANVAS_WIDTH,
            Math.random() * Game.CANVAS_HEIGHT
        );
        this.setVitesse(Math.random()*0.3);
    }

    public update(): void {
        this.getPosition().y+=this.getVitesse();

        if(this.getPosition().y > Game.CANVAS_HEIGHT){
            this.setPosition(
                Math.random() * Game.CANVAS_WIDTH,
                -10
            );
        }
    }
}
