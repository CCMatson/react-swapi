import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [starships , setStarships] = useState([])
  return (
    <div className="App">
      <NavBar/>
      {/* {starships.map(starship => <Starship key={starship.name} startship={starship}/>)} */}

    </div>
  );
}

export default App;
