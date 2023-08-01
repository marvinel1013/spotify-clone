"use client";

import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import MenuPlaylists from "./MenuPlaylists";
import { useOpenMenu } from "@/hooks/useOpenMenu";

function MenuLists() {
  const setIsOpen = useOpenMenu((state) => state.setIsOpen);
  return (
    <div className="mt-5 pl-2 text-gray-400 h-screen text-sm lg:text-base lg:tracking-wide">
      <div className="space-y-2 tracking-wide w-fit">
        <Link
          onClick={setIsOpen}
          href={"/"}
          className="flex gap-1.5 hover:text-white"
        >
          <HomeIcon className="w-5 pb-1" />
          <span>Home</span>
        </Link>

        <Link
          onClick={setIsOpen}
          href={"/search"}
          className="flex gap-1.5 hover:text-white"
        >
          <MagnifyingGlassIcon className="w-5 pb-1" />
          <span>Search</span>
        </Link>

        <Link
          onClick={setIsOpen}
          href={"/library"}
          className="flex gap-1.5 hover:text-white"
        >
          <BuildingLibraryIcon className="w-5 pb-1" />
          <span>Library</span>
        </Link>
      </div>

      <div className="border-b border-gray-500/40 my-4" />

      <div className="space-y-2 tracking-wid w-fit">
        <div className="flex gap-1.5 hover:text-white cursor-pointer">
          <PlusCircleIcon className="w-5 pb-1" />
          <span>Create Playlist</span>
        </div>

        <div className="flex gap-1.5 hover:text-white cursor-pointer">
          <HeartIcon className="w-5 pb-1" />
          <span>Liked Songs</span>
        </div>
      </div>
      <div className="border-b border-gray-500/40 my-4" />
      <MenuPlaylists />
    </div>
  );
}

export default MenuLists;
