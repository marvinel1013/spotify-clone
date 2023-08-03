"use client";

import Cover from "@/components/Cover";
import TracksTable from "@/components/TracksTable";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Container from "@/components/Container";

import { useEffect } from "react";
import Card from "@/components/Card";
import LoadingPage from "@/components/LoadingPage";

function Album({ params }) {
  const { spotifyData: albumData, fetchData, isLoading } = useFetch();
  const { spotifyData: tracksData, fetchData: fetchTracksData } = useFetch();
  const { spotifyData: newAlbumData, fetchData: getNewAlbumData } = useFetch();
  const { data: session } = useSession();

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/albums/${params.id}`);
    fetchTracksData(`https://api.spotify.com/v1/albums/${params.id}/tracks`);
    getNewAlbumData(`https://api.spotify.com/v1/browse/new-releases`);
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
        title={albumData?.name}
        subtitle="ALBUM"
        image={albumData?.images?.[0]?.url}
      />
      <Container>
        <TracksTable
          tracksData={tracksData?.items}
          image={albumData?.images?.[0]?.url}
        />
        <h1 className="xl:ml-5 mt-20 mb-3 xl:mb-7 text-lg font-extrabold md:text-xl xl:text-2xl">
          New Release Albums
        </h1>
        <Card
          items={newAlbumData?.albums?.items}
          rounded={false}
          href="album"
        />
      </Container>
    </div>
  );
}

export default Album;
