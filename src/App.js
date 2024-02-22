import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Register from "./components/Register";
import Results from "./components/Results";
import { useEffect } from "react";
import Redir from "./components/Redir";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Redir />} />
          <Route path="/Pratitya24" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Register/:id" element={<Register />} />
          <Route path="/events/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
