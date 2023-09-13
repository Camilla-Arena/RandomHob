import { useState } from "react";

export default function AddHobbyForm({addHobby}){
const [nomeHobby , setNameHobby] = useState("");
   
    const addHobbyHandler = (e) => {
        
        const hobbyData = {
            hobbyName: nomeHobby
        };

        e.preventDefault();
        if(nomeHobby.trim() !== ""){

            
        addHobby(hobbyData);
        setNameHobby("");
        }

    };
    return (
        <form onSubmit={addHobbyHandler}>
        <input className="input-add" type="text" value={nomeHobby} onChange={(e) => setNameHobby(e.target.value)} placeholder="Nome hobby" />
        <br></br>
        <button className="btn" type="submit" onClick={addHobbyHandler}>Aggiungi</button>
        </form>
    );
}

