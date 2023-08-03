"use client";

import Container from "@/components/Container";
import Cover from "@/components/Cover";
import LoadingPage from "@/components/LoadingPage";
import TracksTable from "@/components/TracksTable";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Playlists({ params }) {
  const { data: session } = useSession();
  const { spotifyData, fetchData, isLoading } = useFetch();

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/playlists/${params.id}`);
  }, [session]);

  if (isLoading)
    return (
      <div className="w-full h-screen">
        <LoadingPage center={true} />
      </div>
    );

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hide">
      <Cover
        title={spotifyData?.name}
        subtitle="PLAYLIST"
        image={spotifyData?.images[0]?.url}
      />

      <Container>
        <TracksTable tracksData={spotifyData?.tracks?.items} />
      </Container>
    </div>
  );
}

export default Playlists;
