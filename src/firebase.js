import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDnR5924G4yXBz5-YnmaL-oXh5r6fDsdzI",
  authDomain: "chat1-c122c.firebaseapp.com",
  projectId: "chat1-c122c",
  storageBucket: "chat1-c122c.appspot.com",
  messagingSenderId: "861917440094",
  appId: "1:861917440094:web:93f1e682d34bc80323accf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();