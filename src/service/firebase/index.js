import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMvQaoNp5G4y9SJ-0PJ_JoY8VUrcQf-V0",
  authDomain: "bar-benito.firebaseapp.com",
  projectId: "bar-benito",
  storageBucket: "bar-benito.appspot.com",
  messagingSenderId: "1014904876153",
  appId: "1:1014904876153:web:65554e11df954edd16b8a8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
