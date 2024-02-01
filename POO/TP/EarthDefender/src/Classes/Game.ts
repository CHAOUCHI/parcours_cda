import { Alien } from "./GameObjects/Alien.js";
import { GameObject } from "./GameObjects/GameObject.js";
import { Input } from "./Input.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Earth } from "./GameObjects/Earth.js";

export class Game{
    // Public attributs
    public static readonly CANVAS_WIDTH : number = 1300;
    public static readonly CANVAS_HEIGHT : number = 600;
    
    // Private attributs
    private context: CanvasRenderingContext2D;
    private gameObjects : Array<GameObject> = [];
    private player : Player;
    private earth : Earth;
    
    private nbMaxAlien : number = 10;
    private nbRemainingAlien : number = this.nbMaxAlien;
    
    constructor(){
        const canvas = document.querySelector("canvas");
        canvas.height = Game.CANVAS_HEIGHT;
        canvas.width = Game.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    
    // Public methods
    public start(){
        
        for (let i = 0; i < Math.random()*(100-20)+20; i++) {
            this.gameObjects.push(new Star(this));
        }

        this.earth = new Earth(this);
        this.gameObjects.push(this.earth);

        for (let i = 0; i < this.nbMaxAlien; i++) {
            this.gameObjects.push(new Alien(this));
        }
        this.player = new Player(this);
        this.gameObjects.push(this.player);   
       
    


        Input.listenPlayerInput();
        this.gameLoop();
    }

    public getGameObjects() : readonly GameObject[]{
        return this.gameObjects; 
    } 
    public getPlayer() : Player{
        return this.player;
    }
    public instanciate(newGameObject : GameObject) : void{
        this.gameObjects.push(newGameObject);
    }
    public destroy(gameObjectToDestroy : GameObject) : void{
        this.gameObjects.forEach((gameObject,i)=>{
            if(gameObjectToDestroy === gameObject){
                this.gameObjects.splice(i,1);
            }
        });
    }
    public decreaseAlienCount(){
        this.nbRemainingAlien--;
        if(this.nbRemainingAlien <= 0){
            this.win();
        }
    }

    public over(reason : string = "You are bad at video game."){
        alert("GAME OVER : "+reason);
        location.reload();
    }
    public win(){
        alert("WIN !");
        location.reload();
    }



    
    // Private methods

    private draw(gameObject : GameObject){
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getWidth(),
            gameObject.getHeight()
        );
    }
    
    private gameLoop(){
        setInterval(()=>{
            // Clear context
            this.context.clearRect(0,0,Game.CANVAS_WIDTH,Game.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0,0,Game.CANVAS_WIDTH,Game.CANVAS_HEIGHT);

            // Draw and update every gameobjects
            this.gameObjects.forEach((gameObject,i)=>{
                gameObject.update();
                this.draw(gameObject);
                this.checkCollisionWithAllGameobjectFrom(gameObject);
            });

            this.updateUI();


        },10);
    }

    /**
     * Check if the provided gameObject collide with any of the instanciate gameObjects.
     * @param gameObject 
     */
    private checkCollisionWithAllGameobjectFrom(gameObject : GameObject){
        this.gameObjects.forEach((other)=>{
            if(other !== gameObject){
                if(gameObject.overlap(other)){
                    gameObject.collide(other);
                }
            }
        });
    }

    private updateUI(){
        const remainingAlien = <HTMLElement>document.querySelector(".remain_alien");
        remainingAlien.innerText = `${this.nbRemainingAlien} / ${this.nbMaxAlien}`;
    }
}