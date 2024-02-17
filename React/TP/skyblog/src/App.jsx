import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { Slider } from "./Slider";
import { Content } from "./Content";

export function App(){
    
    const [styleContent,setStyleContent] = useState({ color : "rgba(255,0,0,1)"});

    function updateBgColor(newColor){
        setStyleContent({
            ...styleContent,
            backgroundColor : `rgba(${newColor.red},${newColor.green},${newColor.blue},1)`
        });
    }

    function updateTextColor(newColor){
        setStyleContent({
            ...styleContent,
            color : `rgba(${newColor.red},${newColor.green},${newColor.blue},1)`
        });
    }

    function updateTextSize(newSize){
        setStyleContent({
            ...styleContent,
            fontSize : `${newSize}px`
        });
    }

    return (
        <div>
            <div>
                <h2>Couleur de fond</h2>
                <ColorPicker onColorChange={updateBgColor}/>
            </div>
            <div>
                <h2>Couleur du texte</h2>
                <ColorPicker onColorChange={updateTextColor}/>
            </div>
            <Slider name="Taille du texte" onValueChange={updateTextSize}/>
            <Content style={styleContent}/>
        </div>
    )
}