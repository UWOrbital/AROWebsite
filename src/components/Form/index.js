import { React, useState } from "react";
import { db } from "../../firebase-config";
//import { getDatabase, ref, set } from "firebase/database";

//const database = getDatabase();

const InputForm = () => {
  const [callSign, setCallSign] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  //const ref = firebase.firestore().collection("users");
  //console.log(ref);

  const handleSubmit = (event) => {
    const submission = { callSign, name, phoneNumber, email };
    console.log(submission);

    db.collection("users").add(submission);

    //fetch('http://localhost:8000/submissions', {
    /* fetch('https://uwu-orbital.firebaseio.com/users', {
            method: 'POST',
            //headers: { "Content-Type": "application/json" },
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submission)
        }).then( () => {
            console.log('it worked!');
        }) */
    alert("Thanks for submitting!");
  };

  return (
    <form onSubmit={handleSubmit} id="main-form">
      <label>Call Sign</label>
      <input
        required
        type="text"
        placeholder="Enter your call sign"
        value={callSign}
        onChange={(event) => setCallSign(event.target.value)}
      />
      <label>Name</label>
      <input
        required
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Phone Number</label>
      <input
        required
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <label>Email</label>
      <input
        required
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default InputForm;
