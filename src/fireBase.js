import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEZxW308YWBH48gHll5ESuiqYXV208OAI",
  authDomain: "yourcase-pavlotsky.firebaseapp.com",
  projectId: "yourcase-pavlotsky",
  storageBucket: "yourcase-pavlotsky.appspot.com",
  messagingSenderId: "809148509619",
  appId: "1:809148509619:web:bafcd3a514e05e00c8afc6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
