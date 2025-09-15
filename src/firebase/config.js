// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtHFKbcqQf4y3oR-zmGWdLKbQu9mmQyCM",
  authDomain: "bazario-ac3be.firebaseapp.com",
  projectId: "bazario-ac3be",
  storageBucket: "bazario-ac3be.firebasestorage.app",
  messagingSenderId: "600335713865",
  appId: "1:600335713865:web:3a6c9299d2d3310ffda198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{db,auth,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}