import { Game } from "../Game.js";
import { Input } from "../Input.js";
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

import { Laser } from "./Laser.js";

export class Player extends GameObject{
    private lastTimeShoot : number = 0;
    private shootTimeInterval : number = 200;  // Minimum time between 2 laser shoot in ms.
    public init(){
        this.setImage(Assets.getPlayer());
        this.setVitesse(this.getVitesse()*4);
        this.setPosition(
            Game.CANVAS_WIDTH/2-this.getWidth()/2,
            Game.CANVAS_HEIGHT - this.getHeight() - 10
        );
    }

    public update(){
        this.movesListener();
        this.shootLaserListener();
    }

    private movesListener(){
        this.getPosition().x+=this.getVitesse() * Input.getAxisX();
    }
    
    private shootLaserListener(){
        if(
            Input.getIsShooting() 
            && 
            (
                (Date.now() - this.lastTimeShoot) >= this.shootTimeInterval
            )
        ){
            const laser = new Laser(this.game);
            laser.setPosition(
                this.getPosition().x + this.getWidth()/2,
                this.getPosition().y
            );
            this.game.instanciate(laser);
            this.lastTimeShoot = Date.now();
        }
    }

}