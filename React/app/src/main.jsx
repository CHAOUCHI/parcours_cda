import React from "react";
import{createRoot} from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.querySelector("#root"))


fetch("/pokemons.json").then(res=>res.json())
.then(data=>{
    
    root.render(
        <React.StrictMode>
                <App pokemons={data}/>
        </React.StrictMode>
    );
});