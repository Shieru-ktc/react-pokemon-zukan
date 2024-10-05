import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonList from "./pages/PokemonList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
