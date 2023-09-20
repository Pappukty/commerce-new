import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD15kKbW849gRDVbO3GBzWrzG9YjbBxsDE",
  authDomain: "e-commerce-ea40e.firebaseapp.com",
  databaseURL: "https://e-commerce-ea40e-default-rtdb.firebaseio.com",
  projectId: "e-commerce-ea40e",
  storageBucket: "e-commerce-ea40e.appspot.com",
  messagingSenderId: "856827267333",
  appId: "1:856827267333:web:9bf1ac8b997af339360f6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export default app;
