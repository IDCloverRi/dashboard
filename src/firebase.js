import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1JpdO5utY796dy2e8-KZnv_OODv2usfI",
  authDomain: "tutorial-5f905.firebaseapp.com",
  projectId: "tutorial-5f905",
  storageBucket: "tutorial-5f905.appspot.com",
  messagingSenderId: "361862639120",
  appId: "1:361862639120:web:1e2b1ba42e28e8e22d2495"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
