"use client";

import useFetch from "@/hooks/useFetch";
import { useOpenMenu } from "@/hooks/useOpenMenu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

function MenuPlaylists() {
  const { data: session } = useSession();
  const { spotifyData, fetchData } = useFetch();
  const setIsOpen = useOpenMenu((state) => state.setIsOpen);

  useEffect(() => {
    fetchData("https://api.spotify.com/v1/me/playlists");
  }, [session]);

  return (
    <div className="space-y-2">
      {spotifyData?.items?.map((data) => (
        <Link
          onClick={setIsOpen}
          key={data.id}
          href={`/playlist/${data.id}`}
          className="block hover:text-white"
        >
          <span>{data?.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default MenuPlaylists;
