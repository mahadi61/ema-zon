// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAozTry6dlF0ckr32L4AAhkEq9BEnd_V6k",
  authDomain: "ema-zon-auth-firebase.firebaseapp.com",
  projectId: "ema-zon-auth-firebase",
  storageBucket: "ema-zon-auth-firebase.appspot.com",
  messagingSenderId: "745799163892",
  appId: "1:745799163892:web:5698701e890da180b6e3a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;