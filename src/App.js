import React from "react";

import Navbar from "./components/navbar";
import About from "./components/about";
import Orbital from "./components/orbital";
import GiveMoney from "./components/givemoney";
import Home from "./components/home";
import NotFound from "./components/404";

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // ----- for testing the database connection -----//
  const [users, setUsers] = useState([]);
  const usersCollectionsRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      console.log(data.docs);
    };

    getUsers();
  }, []); //call the firestore database and get the information when the page is rendered

  // -----------------------------------------------//

  return (
    <>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="orbital" element={<Orbital />} />
          <Route path="givemoney" element={<GiveMoney />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
      {/* test firebase getDatabase */}
    </>
  );
}

export default App;
