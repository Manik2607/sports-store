import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBixsMRgrTpecreQEBu3Rj_b5wAJI4qgcA",
  authDomain: "sports-store-8e192.firebaseapp.com",
  projectId: "sports-store-8e192",
  storageBucket: "sports-store-8e192.appspot.com",
  messagingSenderId: "843266185730",
  appId: "1:843266185730:web:e8b1a240192121f2c5a51b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app,auth ,db};
