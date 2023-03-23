import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG7MQA9W3o6I3PEAteMxFFxVE1grZ783k",
  authDomain: "dict-prsys.firebaseapp.com",
  projectId: "dict-prsys",
  storageBucket: "dict-prsys.appspot.com",
  messagingSenderId: "845655359108",
  appId: "1:845655359108:web:4e5cc61bc81f4773838cd1",
  measurementId: "G-DQBVBFSR7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth}; 