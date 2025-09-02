// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  getAuth
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApIn2t_b0jyunxW2aZwGkLUzTePFGg29Y",
  authDomain: "react-blog-2d760.firebaseapp.com",
  projectId: "react-blog-2d760",
  storageBucket: "react-blog-2d760.firebasestorage.app",
  messagingSenderId: "314035093614",
  appId: "1:314035093614:web:f8873904ce5671a35ae67f",
  measurementId: "G-DLPVN26WE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
