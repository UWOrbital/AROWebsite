import React from "react";
import logo from "../resource/orbital-logo.png";
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default Navbar;
