// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCMA1wGSoCG1VTTtnFPOQcdBZ1B9a3jG-g",
  // authDomain: "react-curso-f2473.firebaseapp.com",
  // projectId: "react-curso-f2473",
  // storageBucket: "react-curso-f2473.firebasestorage.app",
  // messagingSenderId: "692918803866",
  // appId: "1:692918803866:web:566a96eebac5f238612e23",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
