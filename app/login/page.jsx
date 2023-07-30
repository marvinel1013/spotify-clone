"use client";

import { signIn } from "next-auth/react";

function LogIn() {
  return (
    <div className="z-40 fixed top-0 left-0 right-0 bottom-0 bg-black">
      <button
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
        className="bg-green-500 p-2"
      >
        Login
      </button>
    </div>
  );
}

export default LogIn;
