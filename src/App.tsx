import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Pokemon from "./Views/Pokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
