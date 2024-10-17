// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6vs1AP0KqstUZDqPnXJ8gCPjHTAnoeS8",
  authDomain: "netflixgpt-44493.firebaseapp.com",
  projectId: "netflixgpt-44493",
  storageBucket: "netflixgpt-44493.appspot.com",
  messagingSenderId: "616116875222",
  appId: "1:616116875222:web:982b06852b98d68c0abe77",
  measurementId: "G-RFE9ZB9NNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();