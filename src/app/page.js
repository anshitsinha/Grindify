// pages/index.js
"use client";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  const { user, username } = useAuth(); // Check if the user is authenticated

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {!user ? (
        <>
          <h2>Go to /sign-in or /sign-up</h2>
        </>
      ) : (
        <div>
          <h2>Hello, {username}!!</h2>
          <button>Create Project</button>
        </div>
      )}
    </div>
  );
}
