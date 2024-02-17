import { useState } from "react"

export function App(){

    const [isRunning,setIsRunning] = useState(false);
    const [t0,setTZero] = useState(0);
    const [date,setDate] = useState(new Date(0));
    
    function start(){
        setTZero(Date.now());
        setIsRunning(true);
    }
    
    setTimeout(()=>{
        if(isRunning){
            setDate(new Date(Date.now() - t0));
        }   
    },1000)

    let secondes = date.getSeconds();
    if(date.getSeconds() <10){
        secondes = "0"+date.getSeconds();
    }

    return (
        <div>
            <p>{secondes}</p>
            <button onClick={start}>START</button>
        </div>
    )
}