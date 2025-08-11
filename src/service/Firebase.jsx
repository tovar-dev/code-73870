// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ConfigConstants } from '../libs/Constants.jsx';

// Your web app's Firebase configuration
const firebaseConfig = ConfigConstants.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)