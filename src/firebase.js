// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTLd4sJHMIega5a4uIJOCQfXKI7-LxTcs",
    authDomain: "proyecto4-16413.firebaseapp.com",
    projectId: "proyecto4-16413",
    storageBucket: "proyecto4-16413.appspot.com",
    messagingSenderId: "695425074081",
    appId: "1:695425074081:web:38e0a21edfc885d31b41e0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ();