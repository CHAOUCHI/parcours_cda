import { DadJoke } from "./DadJoke";

export function App(){
    return (
        <div>
            <h1>Hello App</h1>
            <DadJoke/>
            <UserProfil name="Manu" lastName="CHAO"/>
        </div>
    );
}

import { useState } from "react";
export function UserProfil({name,lastName}){
    // J'initialise la blague
    const [user,setUser] = useState({name, lastName});
    
    function onChangeName(event){
        const newName = event.target.value;
        setUser({...user, name : newName});
    }
    function onChangeLastName(event){
        const newLastName = event.target.value;
        setUser({...user, lastName : newLastName});
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.lastName}</h2>
            <input onChange={onChangeName} value={user.name}/>
            <input onChange={onChangeLastName} value={user.lastName}/>
        </div>
    );
}