
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFNLik-MGGCY3OGVJkCwYub_g6JP6yaCw",
  authDomain: "proyectofinalreact-santander.firebaseapp.com",
  projectId: "proyectofinalreact-santander",
  storageBucket: "proyectofinalreact-santander.appspot.com",
  messagingSenderId: "38967672635",
  appId: "1:38967672635:web:ba33c9bb0cf73aa601411e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db