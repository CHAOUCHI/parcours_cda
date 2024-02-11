import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// JSX permet une syntaxe simplifier.
root.render(App());

function App(){
    const notes = [20,10,11,7,13];
    let sum = 0;
    for (let i = 0; i < notes.length; i++) {
        sum+= notes[i];        
    }
    const average = sum/notes.length;
    return (
        <div>
            <h1>La moyenne de Maxime </h1>
            <h2>Notes :</h2>
            <ul>
                {notes.map( note => <li>{note} / 20</li> )}
            </ul>
            <p>Moyenne générale : {average}</p>
        </div>
    );
}

