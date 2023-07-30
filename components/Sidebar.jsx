import Image from "next/image";
import MenuLists from "./MenuLists";
import Logo from "@/public/spotify-logo.png";

function Sidebar() {
  return (
    <div className="hidden md:block h-screen bg-black w-[200px] lg:w-[230px] border-r border-gray-500/40 p-2 pr-4 py-4">
      <div>
        <Image src={Logo} alt="logo" className="w-20 lg:w-24" />
      </div>
      <MenuLists />
    </div>
  );
}

export default Sidebar;
