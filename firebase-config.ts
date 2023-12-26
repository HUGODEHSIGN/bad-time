// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF_4qmbnRnOouHIbfJSA5D5vTbqL5j2gw",
  authDomain: "bad-time-4236d.firebaseapp.com",
  projectId: "bad-time-4236d",
  storageBucket: "bad-time-4236d.appspot.com",
  messagingSenderId: "835968852655",
  appId: "1:835968852655:web:f6264c408c77581b51ea5a",
  measurementId: "G-2KE889SBHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
