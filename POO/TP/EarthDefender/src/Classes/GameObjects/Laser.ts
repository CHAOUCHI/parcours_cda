import { Assets } from "../Assets.js";
import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
import { Audio, Track } from "../Audio.js";

export class Laser extends GameObject{
    public init(){
        this.setImage(Assets.getLaser());
        Audio.play(Track.LASER);
    }
    public update(){
        // The laser moves
        this.getPosition().y-=this.getVitesse();
        //The laser is destroyed
        if(this.getPosition().y < 0){
            this.destroy();
        }
    }
    public collide(other: GameObject): void {
        if(other.constructor.name == "Alien"){
            const alien = <Alien>other;
            alien.die();
            // Destory laser
            this.destroy();
            console.log("Destroy laser");
        }
    }
}