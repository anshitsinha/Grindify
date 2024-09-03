// utils/authUtils.js
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

// Function to check if input is email or username and retrieve corresponding email
const getEmailFromUsername = async (input) => {
  // Simple regex to check if input is an email
  const emailRegex = /\S+@\S+\.\S+/;

  if (emailRegex.test(input)) {
    return input; // It's an email
  } else {
    // It's likely a username, so look up in Firestore
    const q = query(collection(db, "users"), where("username", "==", input));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return userDoc.data().email;
    } else {
      throw new Error("Username not found");
    }
  }
};

export default getEmailFromUsername;
