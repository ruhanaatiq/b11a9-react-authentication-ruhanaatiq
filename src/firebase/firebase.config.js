// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk3ONaexza7KYXoyjm9LOR_ZPq4-a-dUk",
  authDomain: "react-authentication-ruhana.firebaseapp.com",
  projectId: "react-authentication-ruhana",
  storageBucket: "react-authentication-ruhana.firebasestorage.app",
  messagingSenderId: "82458498346",
  appId: "1:82458498346:web:a8f7d466b5a69cd7d83a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;