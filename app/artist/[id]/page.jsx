"use client";

import Container from "@/components/Container";
import Cover from "@/components/Cover";
import TracksTable from "@/components/TracksTable";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Artist({ params }) {
  const { spotifyData, fetchData } = useFetch();
  const { spotifyData: tracksData, fetchData: getTracks } = useFetch();
  const { data: session } = useSession();

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/artists/${params.id}`);
    getTracks(
      `https://api.spotify.com/v1/artists/${params.id}/top-tracks?` +
        new URLSearchParams({ market: "PH" })
    );
  }, [session]);

  return (
    <div className="w-full h-screen overflow-y-scroll scrollbar-hide">
      <Cover
        title={spotifyData?.name}
        subtitle="ARTIST"
        image={spotifyData?.images[0]?.url}
        followers={spotifyData?.followers?.total.toLocaleString()}
      />

      <Container>
        <TracksTable tracksData={tracksData?.tracks} />
      </Container>
    </div>
  );
}

export default Artist;
