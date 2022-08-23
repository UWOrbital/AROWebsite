import React from "react";
import Navbar from "./components/Navbar";

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionsRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      console.log(data.docs);
    };

    getUsers();
  }, []); //call the firestore database and get the information when the page is rendered

  return (
    <>
      <Navbar />

      {/* test firebase getDatabase */}
    </>
  );
}

export default App;
