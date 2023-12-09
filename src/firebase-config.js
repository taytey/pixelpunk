// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import { getStorage } from "firebase/storage";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ3Cn1Frm8SKMF0L6Nu0J_NIEO7XQdNLQ",
  authDomain: "pixelpunk-a5e6f.firebaseapp.com",
  databaseURL: "https://pixelpunk-a5e6f-default-rtdb.firebaseio.com",
  projectId: "pixelpunk-a5e6f",
  storageBucket: "pixelpunk-a5e6f.appspot.com",
  messagingSenderId: "325572733824",
  appId: "1:325572733824:web:5656431e1d78d3837cef65",
  measurementId: "G-WCVPS9Q8BE"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);