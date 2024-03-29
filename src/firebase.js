//import Firebase from "firebase/compat/app";
import firebase from "firebase";
//import "firebase/auth";
import "firebase/firestore";
//import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};

//const firebase = Firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };