import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC3NNoRViOBZv5o2xbZh9k-ZAo4Wto3qHE",
  authDomain: "tiktok---jornada---wb.firebaseapp.com",
  projectId: "tiktok---jornada---wb",
  storageBucket: "tiktok---jornada---wb.appspot.com",
  messagingSenderId: "591028133813",
  appId: "1:591028133813:web:539223b7077739f07643fc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;