"use client";

import { useOpenMenu } from "@/hooks/useOpenMenu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function MenuPlaylists() {
  const { data: session } = useSession();
  const [playlistData, setPlaylistData] = useState([]);
  const setIsOpen = useOpenMenu((state) => state.setIsOpen);

  async function getUserPlaylists() {
    if (session?.accessToken || session?.refreshToken) {
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            session?.accessToken || session?.refreshToken
          }`,
        },
      });
      const data = await response.json();
      setPlaylistData(data?.items);
    }
  }

  useEffect(() => {
    getUserPlaylists();
  }, [session]);

  return (
    <div className="space-y-2">
      {playlistData?.map((data) => (
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
