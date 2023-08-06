import logo from './logo.svg';
import './App.css';
import Listpage from './Components/Listpage';
import Individualpage from './Components/Individualpage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Listpage />} />
        <Route path="Individualpage" celement={<Individualpage />} />
      </Routes>
    </div>
  );
}

export default App;
