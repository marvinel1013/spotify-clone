"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/spotify-logo.png";
import MenuLists from "./MenuLists";
import { useOpenMenu } from "@/hooks/useOpenMenu";

function MobileMenu() {
  const isOpen = useOpenMenu((state) => state.isOpen);
  const setIsOpen = useOpenMenu((state) => state.setIsOpen);

  const openStyle =
    "bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 duration-300 ease-in";
  const openMenuStyle =
    "bg-neutral-950 fixed top-0 bottom-0 left-0 w-[55%] border-r border-gray-500/40 p-2 py-4 duration-300 ease-in";
  const closeMenuStyle =
    "bg-neutral-950 fixed top-0 bottom-0 left-[-500px] w-[55%] border-r border-gray-500/40 p-2 py-4 duration-300 ease-in";

  return (
    <div className="fixed top-4 left-2 md:hidden">
      <button onClick={setIsOpen} className="bg-green-700 p-1 rounded-full">
        <Bars3Icon className="w-7" />
      </button>

      <div className={isOpen ? openStyle : ""}>
        <div className={isOpen ? openMenuStyle : closeMenuStyle}>
          <div className="flex items-center justify-between">
            <div>
              <Image src={Logo} alt="logo" className="w-20" />
            </div>

            <button onClick={setIsOpen}>
              <XMarkIcon className="w-6 text-green-500" />
            </button>
          </div>

          <MenuLists />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
