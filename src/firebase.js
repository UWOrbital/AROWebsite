//import Firebase from "firebase/compat/app";
//import firebase from "firebase/";
//import "firebase/auth";
import "firebase/firestore";
//import { getFirestore } from 'firebase/firestore/lite';


import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyCbsG0lSwo1GzwwikffY2Tr8Kz7DsWbhNs",

  authDomain: "aro-firebase-35613.firebaseapp.com",

  databaseURL: "https://aro-firebase-35613-default-rtdb.firebaseio.com",

  projectId: "aro-firebase-35613",

  storageBucket: "aro-firebase-35613.appspot.com",

  messagingSenderId: "575439157259",

  appId: "1:575439157259:web:7ff4dfedb1d13e9001ef0e",

  measurementId: "G-YG06LCVH24"

};
//const firebase = Firebase.initializeApp(firebaseConfig);

//firebase.initializeApp(firebaseConfig);

//const db = firebase.firestore();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  //firebase
};