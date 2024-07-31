// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs9QHB9-tp5kCF51jzQtzgot5ZY7GIWLA",
  authDomain: "expense-tracker-4966a.firebaseapp.com",
  projectId: "expense-tracker-4966a",
  storageBucket: "expense-tracker-4966a.appspot.com",
  messagingSenderId: "222376964952",
  appId: "1:222376964952:web:af70c09806fc8e2c282b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);