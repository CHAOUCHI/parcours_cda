import { List } from "./List";
import "./App.css";
import { useState } from "react";

export function App({pokemons}){
    /** Je pourrais etre tenter d'utiliser un state et d'appeler la fonction setState quand je reçois les données.
     * Cela créerais uen boucle infini, en effet react mes à jour le rendu à chaque appelle de setState.
     * Or si à chaque rendu je recupère à nouveau les données et modifie le state alors react va relancer le rendu et ainsi de suite.
     * Le rendu appel le rendu qui appel le rendu, c'est une fonction récursive infini.
     */
    const [data,setData] = useState(0);

    return (
        <div>
            <button onClick={_=>setData(data+1)}>CLICK {data}</button>
            <List pokemons={pokemons}></List>
            
        </div>
    );
}