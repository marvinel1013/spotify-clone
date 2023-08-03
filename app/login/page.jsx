"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Logo from "@/public/login-logo.webp";

function LogIn() {
  return (
    <div className="z-40 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-black">
      <div className="flex flex-col items-center">
        <Image src={Logo} alt="logo" className="w-20 md:w-24 xl:w-32" />
        <h1 className="font-black text-xl md:text-3xl xl:text-4xl mt-3">
          Spotify Clone
        </h1>
        <h2 className="font-extralight text-sm md:text-base">
          By Marvinel Santos
        </h2>
        <button
          onClick={() => signIn("spotify", { callbackUrl: "/" })}
          className="bg-green-600 text-sm md:text-base p-2 px-4 xl:p-3 xl:px-7 rounded-full mt-3 xl:text-lg xl:font-bold"
        >
          Log In with Spotify
        </button>
      </div>
    </div>
  );
}

export default LogIn;
