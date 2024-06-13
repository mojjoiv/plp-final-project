import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpsmcYDs47xM_LKy5xd5TjEzB93zGjzs4",
  authDomain: "qrcode-fb780.firebaseapp.com",
  projectId: "qrcode-fb780",
  storageBucket: "qrcode-fb780.appspot.com",
  messagingSenderId: "75440845269",
  appId: "1:75440845269:web:0aea9f1037a059d34fcd5c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
