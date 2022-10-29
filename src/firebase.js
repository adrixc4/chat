import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCnWVaOFtiICTtivEy7SWn4XpZYewf31lE",
  authDomain: "chat-70d58.firebaseapp.com",
  projectId: "chat-70d58",
  storageBucket: "chat-70d58.appspot.com",
  messagingSenderId: "598556334777",
  appId: "1:598556334777:web:fb66be42bfbb06f9391968"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();