import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYX8LJSys8wJTz54aarDMahNSqvEGBS3U",
  authDomain: "greenthumb-c42fe.firebaseapp.com",
  projectId: "greenthumb-c42fe",
  storageBucket: "greenthumb-c42fe.firebasestorage.app",
  messagingSenderId: "1067977556307",
  appId: "1:1067977556307:web:4157ad9e1689cf097f61a6",
  measurementId: "G-0JTB8TVQMH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);