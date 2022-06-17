// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx5V6GjOsU9X72-wOiynnElANes8vUV70",
  authDomain: "getproject-47b96.firebaseapp.com",
  databaseURL: "https://getproject-47b96-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "getproject-47b96",
  storageBucket: "getproject-47b96.appspot.com",
  messagingSenderId: "660059743777",
  appId: "1:660059743777:web:50070b94167b7ca189a560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

console.log(app)
export function signup (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}