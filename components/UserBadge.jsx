"use client";

import { useSession, signOut } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function UserBadge() {
  const { data: session } = useSession();
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleOpenTooltip = () => {
    setOpenTooltip((value) => !value);
  };

  return (
    <div className="h-16 flex items-center justify-end">
      {session?.accessToken === undefined ? (
        <div></div>
      ) : (
        <div
          onClick={handleOpenTooltip}
          className="relative flex items-center gap-2 bg-neutral-900 p-1 px-1.5 rounded-full cursor-pointer"
        >
          <img
            src={session?.user?.image}
            alt="profile-image"
            className="w-8 h-8 object-cover rounded-full"
          />
          <h2 className="hidden md:flex md:text-sm lg:text-base">
            {session?.user?.name}
          </h2>
          <ChevronDownIcon className="w-4" />
          {openTooltip && (
            <div className="absolute text-sm md:text-base bg-neutral-900 hover:bg-neutral-800 cursor-pointer p-1 px-1.5 md:p-2 md:px-2.5 rounded-full right-0 -bottom-8 md:-bottom-11">
              <button onClick={() => signOut()}>Log out</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserBadge;
