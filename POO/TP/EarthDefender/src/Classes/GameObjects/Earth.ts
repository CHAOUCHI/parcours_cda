import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
import { Game } from "../Game.js";
import { Alien } from "./Alien.js";

export class Earth extends GameObject{
    private pv : number;
    public init(): void {
        this.setImage(Assets.getEarth());
        this.setVitesse(0);
        this.setWidth(Game.CANVAS_WIDTH);
        this.setPosition(
            0,
            Game.CANVAS_HEIGHT - this.getHeight()
        );
        this.setPv(3);
    }

    public collide(other: GameObject): void {
        if(other.constructor.name == "Alien"){
            this.hit();
            if(this.pv <= 0){
                this.game.over("Earth have been DESTROYED !");
            }
            const alien = <Alien>other;
            alien.die();
        }
    }

    public hit() : void{
        this.setPv(this.pv-1);
    }

    private setPv(pv : number){
        this.pv  = pv;
        const earthPvTag = <HTMLElement>document.querySelector(".earth_pv");
        if(earthPvTag){
            earthPvTag.innerText = this.pv.toString();
        }
        else
        {
            throw Error("No html tag for earth PV exist.");
        }
    }
}