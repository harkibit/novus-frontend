import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

async function getUsers() {
  const users = collection(db, "users");
  const snapshot = await getDocs(users);
  const usersList = snapshot.docs.map((doc) => doc.data());
  return usersList;
}

export { getUsers };
