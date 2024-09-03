"use client"

// components/SignIn.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import getEmailFromUsername from "@/utils/authUtils";

const SignIn = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Get email from input (which might be a username or email)
      const email = await getEmailFromUsername(input);

      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);

      console.log("User signed in!");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Email or Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
