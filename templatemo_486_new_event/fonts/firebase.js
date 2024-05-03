// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwLc9WdKdZdKrTUWVQhM6CWAabdWANi10",
  authDomain: "folio-2674e.firebaseapp.com",
  projectId: "folio-2674e",
  storageBucket: "folio-2674e.appspot.com",
  messagingSenderId: "148651792889",
  appId: "1:148651792889:web:286c57a61cb0719aec4528",
  measurementId: "G-9FDSXY5S3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);