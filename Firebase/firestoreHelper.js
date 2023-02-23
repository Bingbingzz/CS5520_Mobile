import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

export async function writeToDB(goal) {
  try {
    const docRef = await addDoc(collection(firestore, "goals"), goal);
    console.log("ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(firestore, "goals", id));
  } catch (err) {
    console.log(err);
  }
}
