// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f8c89.firebaseapp.com",
  projectId: "mern-blog-f8c89",
  storageBucket: "mern-blog-f8c89.firebasestorage.app",
  messagingSenderId: "948962477562",
  appId: "1:948962477562:web:89d108594bc43f790ed043",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
