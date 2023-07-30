"use client";

import { useSession, signOut } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";

function UserBadge({ title }) {
  const { data: session } = useSession();
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleOpenTooltip = useCallback(() => {
    setOpenTooltip((value) => !value);
  }, setOpenTooltip);

  return (
    <div className="h-16 flex items-center justify-between">
      <div className="invisible lg:visible">{title}</div>

      {session?.accessToken === undefined ? (
        <div></div>
      ) : (
        <div
          onClick={handleOpenTooltip}
          className="relative flex items-center gap-2 bg-neutral-900 p-1 px-1.5 rounded-full"
        >
          <img
            src={session?.user?.image}
            alt="profile-image"
            className="w-8 h-8 object-cover rounded-full"
          />
          <h2 className="hidden md:flex">{session?.user?.name}</h2>
          <ChevronDownIcon className="w-4" />
          {openTooltip && (
            <div className="absolute text-sm md:text-base bg-neutral-800 p-1 px-1.5 md:p-2 md:px-2.5 rounded-full right-0 -bottom-8 md:-bottom-11">
              <button onClick={() => signOut()}>Log out</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserBadge;
