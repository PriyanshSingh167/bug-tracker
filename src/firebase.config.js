// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA-Ij6zHEio1KJpNX76VLMa2t-F_V18sWA",
  authDomain: "bug-tracker-c0862.firebaseapp.com",
  projectId: "bug-tracker-c0862",
  storageBucket: "bug-tracker-c0862.appspot.com",
  messagingSenderId: "815408451305",
  appId: "1:815408451305:web:dac78bc9738a1297236a78",
  measurementId: "G-7BZZT933LW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
