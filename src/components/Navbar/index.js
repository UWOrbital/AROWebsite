import React from 'react';
import logo from './orbital-logo.png';
import InputForm from '../Form';
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="nav">
                <img src={logo} alt="orbital logo"></img>
                <div className="navmenu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/orbital">Orbital</Link>
                    <Link to="/givemoney">Give Money</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="orbital" element={<Orbital />} />
                <Route path="givemoney" element={<GiveMoney />} />
            </Routes>
        </div>
    );
};

function Home() {
    return (
      <>
        <InputForm />
      </>
    );
  }
  
function About() {
    return (
        <div className="pagediv">
            <img src="http://www.asc-csa.gc.ca/images/satellites/cubesat/cubesat-og.jpg" alt="cubesat"></img>
        </div>
    );
}

function Orbital() {
    return (
        <div className="pagediv">
            <img src="https://c.tenor.com/yu4yJBMcidMAAAAd/space.gif" alt="space gif"></img>
        </div>
    );
}

function GiveMoney() {
    return (
        <div className="pagediv">
            <img src="https://c.tenor.com/oCxcur4d32wAAAAM/squidward-spare-change.gif" alt="give money gif"></img>
        </div>
    );
}

export default Navbar;