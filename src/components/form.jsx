import { React, useState, useEffect } from "react";
import { db } from "../firebase-config";
// import { addDoc } from "@firebase/firestore";

import { collection, getDocs, addDoc } from "firebase/firestore";

const InputForm = () => {
  // ----- read data from database -----//
  // const [users, setUsers] = useState([]);
  const usersCollectionsRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      console.log(data.docs);
    };

    getUsers();
  }, []); //call the firestore database and get the information when the page is rendered
  // ----------------------------------//

  const [newCallSign, setCallSign] = useState("");
  const [newName, setName] = useState("");
  const [newPhoneNumber, setPhoneNumber] = useState("");
  const [newEmail, setEmail] = useState("");

  //to create user
  const handleSubmit = async (event) => {
    event.preventDefault(); //stay on the same form page and prevent refreshing the form

    console.log("hihihi");
    try {
      await addDoc(collection(db, "users"), {
        callsign: newCallSign,
        email: newEmail,
        name: newName,
        phonenumber: newPhoneNumber,
      });

      // onClose();
    } catch (err) {
      console.error("writeToDB failed. reason :", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="main-form">
      <label>Call Sign</label>
      <input
        required
        type="text"
        placeholder="Enter your call sign"
        onChange={(event) => setCallSign(event.target.value)}
      />
      <label>Name</label>
      <input
        required
        type="text"
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />
      <label>Phone Number</label>
      <input
        required
        type="text"
        placeholder="Enter your phone number"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <label>Email</label>
      <input
        required
        type="email"
        placeholder="Enter your email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
