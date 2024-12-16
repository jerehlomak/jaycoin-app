import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCebowik5StrSudPtH3cVC0bsKLSGeBxeY",
  authDomain: "jaycoin-d2189.firebaseapp.com",
  projectId: "jaycoin-d2189",
  storageBucket: "jaycoin-d2189.firebasestorage.app",
  messagingSenderId: "868470446273",
  appId: "1:868470446273:web:0c7f6e0270704538f39c40",
  measurementId: "G-PHW6K58PH6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };