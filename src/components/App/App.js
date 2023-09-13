//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import AddHobbyForm from '../addHobbyForm';


function App() {
  const [hobbies, setHobbies] = useState([]);
  const [randomHobby, setRandomHobby] = useState(null);

  const addHobby = (hobby) => {
    setHobbies([...hobbies, hobby]);
  };

  const getRandomHobby = () => {
    if(hobbies.length === 0){
      alert("Inserisci almeno un hobby");
      return;
    }
  
  const randomIndex = Math.floor(Math.random() * hobbies.length);
  console.log(hobbies.length);
  setRandomHobby(hobbies[randomIndex]);
  console.log(setRandomHobby(hobbies[randomIndex]));
};
  return(
    <div className="container">
      <h1>RandomHob</h1>
      <p>App per decidere a quale passione vuoi dedicarti ogni giorno.</p>
      <span>Inserisci quante passioni ti vuoi dedicare al giorno nel riquadro e l'app sceglierà per te:</span>
      <p id="paragraph-joke">Non c'è AI non c'è inganno 🤖🤖🤖</p>
      <br></br>
     
    
      
      <AddHobbyForm addHobby ={addHobby} />
      {hobbies.map((hobby) => (
      <ul key={hobby.id}>
        <li>{`${hobby.hobbyName}`}</li>
      </ul>
      ))}
     
      <button className="btn" onClick={() => setHobbies([])}>Pulisci</button>
      <button className="btn" onClick={getRandomHobby}>Scegli hobby casuale</button>
      {randomHobby && <p>{`Hobby casuale: ${randomHobby.hobbyName}`}</p>}
      
      
    </div>
  )

}

export default App;
