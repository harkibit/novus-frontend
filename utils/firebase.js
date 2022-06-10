import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// import { } from 'firebase/<service>';

const config = {
  apiKey: "AIzaSyCBZZPsCC1Vw4MnsUIpnuDFSUgCZCCQyu0",
  authDomain: "todo-list-705ab.firebaseapp.com",
  projectId: "todo-list-705ab",
  storageBucket: "todo-list-705ab.appspot.com",
  messagingSenderId: "305320838550",
  appId: "1:305320838550:web:59bbc0d62be3803d0589b7",
  measurementId: "G-ZRE57NE2SK",
};

const app = initializeApp(config);
export const db = getFirestore(app);
