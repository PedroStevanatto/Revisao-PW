import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Contador from "./pages/Contador";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className="link">Home</Link > | <Link to="/usuarios" className="link">Usuarios</Link> | <Link to="/contador" className="link">Contador</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/contador" element={<Contador />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;