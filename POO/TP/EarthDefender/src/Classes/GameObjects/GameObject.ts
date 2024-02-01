import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { Position } from "../../Interfaces/Position.js";

export class GameObject{
    // Protected attributs
    private image : HTMLImageElement;
    private height : number;
    private width : number;
    private vitesse : number;
    private position : Position;
    protected game : Game; 
    
    constructor(game : Game){
        this.game = game;
        this.position = {x : 0, y: 0};
        this.vitesse = 2;
        this.setImage(Assets.getDefault());
        this.init();
    }


    // Public methods
    
    // Called only one time
    public init(){
        console.log("Init game object");
    }
    // Called each frame
    public update(){
    }

    // Called on collition
    public collide(other : GameObject){

    }

    public getImage() : HTMLImageElement{
        return this.image;
    }
    public setImage(image : HTMLImageElement) : void{
        this.image = image;
        this.height = this.image.height;
        this.width = this.image.width;
    }

    public getPosition() : Position{
        return this.position;
    }
    public setPosition(x : number,y:number) : void{
        this.position = {x,y};
    }

    public getWidth(){
        return this.width;
    }
    public setWidth(width : number){
        this.width = width;
    }
    public getHeight(){
        return this.height;
    }
    public setHeight(height : number){
        this.height = height;
    }

    public getVitesse() : number{
        return this.vitesse;
    }
    public setVitesse(vitesse : number){
        this.vitesse = vitesse;
    }

    public destroy(){
        console.log(this.game.getGameObjects());
        this.game.destroy(this);
        
    }

    public overlap(other : GameObject) : boolean{
        if(
            // Check x axis overlap
            (
                other.left() <= this.left() && this.left() <= other.right()
                ||
                other.left() <= this.right() && this.right() <= other.right()
                ||
                this.left() <= other.left() && other.left() <= this.right()
                ||
                this.left() <= other.right() && other.right() <= this.right()
            )
            &&
            (
                // check y axis overlap
                other.top() <= this.top() && this.top() <= other.bottom()
                ||
                other.top() <= this.bottom() && this.bottom() <= other.bottom()
                ||
                this.top() <= other.top() && other.top() <= this.bottom()
                ||
                this.top() <= other.bottom() && other.bottom() <= this.bottom()
            )
        )
        {
            return true;        // They overlap
        }
        else{
            return false;       // They do not overlap
        }
    }

    public top() : number{
        return this.position.y;
    }
    public bottom() : number{
        return this.position.y + this.getHeight();
    }
    public left() : number{
        return this.position.x;
    }
    public right() : number{
        return this.position.x + this.getWidth();
    }
}