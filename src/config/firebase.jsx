import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAal69oeUSiJ0efHucUYVcfeY47BLspeUs",
  authDomain: "flavornest-a2fff.firebaseapp.com",
  projectId: "flavornest-a2fff",
  storageBucket: "flavornest-a2fff.firebasestorage.app",
  messagingSenderId: "180013542081",
  appId: "1:180013542081:web:cafc42692bd33f60414240",
  measurementId: "G-392RECGLYL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
