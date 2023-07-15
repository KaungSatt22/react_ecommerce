// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API,
  authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_FIREBASE_STOREBACKET,
  messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_REACT_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
