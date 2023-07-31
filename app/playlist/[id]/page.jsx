"use client";

import Container from "@/components/Container";
import Cover from "@/components/Cover";
import TracksTable from "@/components/TracksTable";
import UserBadge from "@/components/UserBadge";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Playlists({ params }) {
  const { data: session } = useSession();
  const [playlistData, setPlaylistData] = useState();

  async function getPlaylistData() {
    if (session?.accessToken || session?.refreshToken) {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${
              session?.accessToken || session?.refreshToken
            }`,
          },
        }
      );
      const data = await response.json();
      setPlaylistData(data);
    }
  }

  useEffect(() => {
    getPlaylistData();
  }, [session]);

  // console.log("PLAYLISTDATA:", playlistData);

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hide">
      <Cover
        title={playlistData?.name}
        subtitle="PLAYLIST"
        image={playlistData?.images[0]?.url}
      >
        <UserBadge />
      </Cover>

      <Container>
        <TracksTable tracksData={playlistData?.tracks?.items} />
      </Container>
    </div>
  );
}

export default Playlists;
