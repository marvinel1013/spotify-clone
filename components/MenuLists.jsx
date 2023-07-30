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

function MenuLists() {
  return (
    <div className="mt-5 pl-2 text-gray-400 h-screen text-sm lg:text-base lg:tracking-wide">
      <div className="space-y-2 tracking-wide">
        <Link href={"/"} className="flex gap-1.5 hover:text-white">
          <HomeIcon className="w-5 pb-1" />
          <span>Home</span>
        </Link>

        <Link href={"/"} className="flex gap-1.5 hover:text-white">
          <MagnifyingGlassIcon className="w-5 pb-1" />
          <span>Search</span>
        </Link>

        <Link href={"/"} className="flex gap-1.5 hover:text-white">
          <BuildingLibraryIcon className="w-5 pb-1" />
          <span>Library</span>
        </Link>
      </div>

      <div className="border-b border-gray-500/40 my-4" />

      <div className="space-y-2 tracking-wide">
        <Link href={"/"} className="flex gap-1.5 hover:text-white">
          <PlusCircleIcon className="w-5 pb-1" />
          <span>Create Playlist</span>
        </Link>

        <Link href={"/"} className="flex gap-1.5 hover:text-white">
          <HeartIcon className="w-5 pb-1" />
          <span>Liked Songs</span>
        </Link>
      </div>
      <div className="border-b border-gray-500/40 my-4" />
      <MenuPlaylists />
    </div>
  );
}

export default MenuLists;
