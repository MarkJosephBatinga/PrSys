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


// Main Project
//   apiKey: "AIzaSyC8fwu8fskaGm314cvgaGtzZ5PnWOzHe6M",
//   authDomain: "dict-procsystem.firebaseapp.com",
//   projectId: "dict-procsystem",
//   storageBucket: "dict-procsystem.appspot.com",
//   messagingSenderId: "282105267764",
//   appId: "1:282105267764:web:45dd02faf33c1fe14c2c61",
//   measurementId: "G-FHLR2J0X71"

// Juanette
//  apiKey: "AIzaSyBG7MQA9W3o6I3PEAteMxFFxVE1grZ783k",
//   authDomain: "dict-prsys.firebaseapp.com",
//   projectId: "dict-prsys",
//   storageBucket: "dict-prsys.appspot.com",
//   messagingSenderId: "845655359108",
//   appId: "1:845655359108:web:4e5cc61bc81f4773838cd1",
//   measurementId: "G-DQBVBFSR7L"


// Allen
//   apiKey: "AIzaSyBfmDiWf26fn2_TH0tAFVYOkgsJwWsx1lI",
//   authDomain: "dict-proc.firebaseapp.com",
//   projectId: "dict-proc",
//   storageBucket: "dict-proc.appspot.com",
//   messagingSenderId: "905803102754",
//   appId: "1:905803102754:web:f9714f9a01a82a927a687b",
//   measurementId: "G-R8QSWQ5QV4"