import React from 'react';
import './App.css';
import './background.jpg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Orbital from './pages/orbital';
//import InputForm from './components/Form';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={About} />
        <Route path="/orbital" element={Orbital} />
      </Routes>
    </Router>
  );
}

export default App;