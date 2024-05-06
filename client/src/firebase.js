// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3f4b7.firebaseapp.com",
  projectId: "mern-estate-3f4b7",
  storageBucket: "mern-estate-3f4b7.appspot.com",
  messagingSenderId: "723871340617",
  appId: "1:723871340617:web:7ca7b2c692238e0e418798"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);