import { useState,useEffect } from "react";
export function DadJoke(){
    const [joke,setJoke] = useState("Attend je réflechis...");
    const state = useState(0);
    console.log(state);
    function tellJoke(){
        const headers = new Headers();
        headers.append("Accept","text/plain");

        fetch("https://icanhazdadjoke.com",{ headers })
        .then(res => res.text())
        .then(joke => setJoke(joke));
    }

    useEffect(()=>{
        tellJoke();
    },[]);

    return (
        <div>
            <p>{joke}</p>
            <button onClick={tellJoke}>Dire la blague</button>
        </div>
    );
}