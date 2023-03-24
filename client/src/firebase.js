import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfmDiWf26fn2_TH0tAFVYOkgsJwWsx1lI",
  authDomain: "dict-proc.firebaseapp.com",
  projectId: "dict-proc",
  storageBucket: "dict-proc.appspot.com",
  messagingSenderId: "905803102754",
  appId: "1:905803102754:web:f9714f9a01a82a927a687b",
  measurementId: "G-R8QSWQ5QV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth}; 