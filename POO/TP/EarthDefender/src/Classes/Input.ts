import { Axis } from "../Types/Axis.js";

export class Input{
    private static axisX : Axis = 0;
    private static isShooting : boolean = false;

    public static getIsShooting() : boolean{
        return Input.isShooting;
    }
    public static getAxisX(){
        return Input.axisX;
    }
    public static listenPlayerInput(){
        // Key Down
        document.addEventListener("keydown",(event)=>{
            switch (event.key) {
                // Go right
                case "d":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                    Input.axisX = -1;
                    break;
                // Shoot
                case " ":
                    Input.isShooting = true;
                break;
            
                default:
                    break;
            }
        });

        // Key Realeased
        document.addEventListener("keyup",(event)=>{
            switch (event.key) {
                // Player Stops
                case "d":
                case "q":
                    Input.axisX = 0;
                break;

                case " ":
                    Input.isShooting = false;
                    break;
            
                default:
                    break;
            }
        });
    }
}