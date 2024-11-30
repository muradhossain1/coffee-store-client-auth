// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrfcivRwlYyEBQZbLZzr1f6DLFdRvRboA",
  authDomain: "coffee-store-1e2f6.firebaseapp.com",
  projectId: "coffee-store-1e2f6",
  storageBucket: "coffee-store-1e2f6.firebasestorage.app",
  messagingSenderId: "11852538199",
  appId: "1:11852538199:web:d3b487e7b924b5cbfe5e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);