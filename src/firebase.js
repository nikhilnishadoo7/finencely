// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhM0fZEqjydrKII45vseV2f6WkBdGeYkY",
  authDomain: "financely-25ce9.firebaseapp.com",
  projectId: "financely-25ce9",
  storageBucket: "financely-25ce9.firebasestorage.app",
  messagingSenderId: "54008435113",
  appId: "1:54008435113:web:914fae663ee5499dca34b8",
  measurementId: "G-ECMPXGRKTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
