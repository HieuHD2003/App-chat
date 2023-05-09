import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA85yizGHU_OSuvIz6veBAFuk1JHht_8Sc",
  authDomain: "chat-b1610.firebaseapp.com",
  projectId: "chat-b1610",
  storageBucket: "chat-b1610.appspot.com",
  messagingSenderId: "1031406747218",
  appId: "1:1031406747218:web:62138fcc32945eac98a98b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();