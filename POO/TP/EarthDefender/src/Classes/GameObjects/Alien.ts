import { Game } from "../Game.js";
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Alien extends GameObject{
    public init(){
        this.setImage(Assets.getAlien());
        const randomPosX = Math.random() * (Game.CANVAS_WIDTH - this.getWidth());
        const randomPosY = -(Math.random() * Game.CANVAS_HEIGHT);
        this.setPosition(
            randomPosX,
            randomPosY
        );
    }
    public update(){
        this.getPosition().y+=this.getVitesse()*Math.random();
    }

    public collide(other : GameObject){
        if(other == this.game.getPlayer()){
            console.log("Alien hits Player");
            this.game.over("An alien ate the last defender(the player).");
        }
    }

    public die(){
        this.destroy();
        this.game.decreaseAlienCount();
    }
}