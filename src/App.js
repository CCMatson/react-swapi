import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Starships from './pages/Starships/Starships';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Starships/>}/>
        </Routes>
    </div>
  );
}

export default App;
