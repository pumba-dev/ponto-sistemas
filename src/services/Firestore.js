import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDsGiP25yjWL2VbNzeBrqlpwuJdH1Sgcbk",
    authDomain: "ponto-sistemas-teste.firebaseapp.com",
    projectId: "ponto-sistemas-teste",
    storageBucket: "ponto-sistemas-teste.appspot.com",
    messagingSenderId: "965080545383",
    appId: "1:965080545383:web:1496394d32dce2fcd73cc2"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore
