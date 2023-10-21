// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgPNsBwur-Ee_RIxFqI74ExVj8SkD9QcU",
  authDomain: "react-bressanello.firebaseapp.com",
  projectId: "react-bressanello",
  storageBucket: "react-bressanello.appspot.com",
  messagingSenderId: "973637866370",
  appId: "1:973637866370:web:0aa7617a6eaa57f47d759b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()