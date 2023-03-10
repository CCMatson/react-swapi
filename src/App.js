import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Starships from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
      <Routes>
        <Route path="/" element={<Starships/>}/>
        <Route path="/starship" element={<StarshipPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
