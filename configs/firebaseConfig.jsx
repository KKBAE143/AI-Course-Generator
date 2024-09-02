// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-107cc.firebaseapp.com",
  projectId: "ai-course-107cc",
  storageBucket: "ai-course-107cc.appspot.com",
  messagingSenderId: "405059565786",
  appId: "1:405059565786:web:cece7ed87272feb0784de3",
  measurementId: "G-HF3WF8Y0FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)