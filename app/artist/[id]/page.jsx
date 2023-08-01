"use client";

import Card from "@/components/Card";
import Container from "@/components/Container";
import Cover from "@/components/Cover";
import TracksTable from "@/components/TracksTable";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Artist({ params }) {
  const { spotifyData, fetchData } = useFetch();
  const { spotifyData: artistTracksData, fetchData: getTracks } = useFetch();
  const { spotifyData: relatedArtistsData, fetchData: getRelatedArtists } =
    useFetch();
  const { data: session } = useSession();

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/artists/${params.id}`);
    getTracks(
      `https://api.spotify.com/v1/artists/${params.id}/top-tracks?` +
        new URLSearchParams({ market: "PH" })
    );
    getRelatedArtists(
      `https://api.spotify.com/v1/artists/${params.id}/related-artists`
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
        <TracksTable tracksData={artistTracksData?.tracks} />

        <h1 className="xl:ml-5 mt-20 mb-3 xl:mb-7 text-lg font-extrabold md:text-xl xl:text-2xl">
          Related Artists
        </h1>
        <Card
          relatedArtistsData={relatedArtistsData?.artists}
          type="Artist"
          rounded={true}
        />
      </Container>
    </div>
  );
}

export default Artist;
