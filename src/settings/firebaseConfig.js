import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBxK_ycNbCxxmxdZ853SlghBZ3ZWX62lZA",
  authDomain: "eltd-c910c.firebaseapp.com",
  projectId: "eltd-c910c",
  storageBucket: "eltd-c910c.appspot.com",
  messagingSenderId: "1086624091657",
  appId: "1:1086624091657:web:c5ca7e7fc9ef658889f2d8"
};
const firebaseApp = initializeApp(firebaseConfig);
const initial = () => initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp, "eltd-c910c.firebaseapp.com");

export { db, initial, storage, firebaseConfig };
