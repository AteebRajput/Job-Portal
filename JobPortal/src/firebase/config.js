// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9vKyyCK0W0r1PiwczOzILWRhw373uqJA",
  authDomain: "job-portal-b8c98.firebaseapp.com",
  projectId: "job-portal-b8c98",
  storageBucket: "job-portal-b8c98.appspot.com",
  messagingSenderId: "41454843811",
  appId: "1:41454843811:web:bc3d918ab64c4ce4d80c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()