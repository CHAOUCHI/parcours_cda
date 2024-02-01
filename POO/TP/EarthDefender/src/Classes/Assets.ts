export class Assets{
    public static getLaser(){
        const image = <HTMLImageElement>document.querySelector("img#asset_laser");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getEarth() : HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_earth");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }
    

    public static getDefault(){
        const image = <HTMLImageElement>document.querySelector("img#asset_player");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getPlayer(){
        const image = <HTMLImageElement>document.querySelector("img#asset_player");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }

    public static getAlien() : HTMLImageElement{
        const image = <HTMLImageElement>document.querySelector("img#asset_alien");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;

    }

    public static getStar(){
        const image = <HTMLImageElement>document.querySelector("img#asset_star");
        if(image == null){
            throw Error("L'asset n'existe pas.");
        }
        return image;
    }
    
}