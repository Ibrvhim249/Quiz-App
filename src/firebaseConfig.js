// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJJzcHMuDoBLZQoXiN8Uj-P-whxxN-mC8",
  authDomain: "quiz-app-3ffea.firebaseapp.com",
  projectId: "quiz-app-3ffea",
  storageBucket: "quiz-app-3ffea.firebasestorage.app",
  messagingSenderId: "941721748854",
  appId: "1:941721748854:web:d8803476083bde51586657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;