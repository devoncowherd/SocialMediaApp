// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Z26yl7qoPayj7JRkkcM8HJqoChSCCD0",
  authDomain: "socialmediaapp-1ad72.firebaseapp.com",
  projectId: "socialmediaapp-1ad72",
  storageBucket: "socialmediaapp-1ad72.appspot.com",
  messagingSenderId: "840098147253",
  appId: "1:840098147253:web:8be7557a489389e8bdc7fc",
  measurementId: "G-5832FWKFWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);