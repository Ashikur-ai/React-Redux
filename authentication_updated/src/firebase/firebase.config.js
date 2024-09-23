// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_aJwcdu8t_fiehxUu4YFDhN9XREpABhc",
  authDomain: "updated-authentication.firebaseapp.com",
  projectId: "updated-authentication",
  storageBucket: "updated-authentication.appspot.com",
  messagingSenderId: "530115391956",
  appId: "1:530115391956:web:85667914ba166874c02641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;