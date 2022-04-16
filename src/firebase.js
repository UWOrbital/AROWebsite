//import Firebase from "firebase/compat/app";
import firebase from "firebase";
//import "firebase/auth";
import "firebase/firestore";
//import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "uwu-orbital.firebaseapp.com",
    projectId: "uwu-orbital",
    storageBucket: "uwu-orbital.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

//const firebase = Firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };