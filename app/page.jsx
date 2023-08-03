"use client";

import Card from "@/components/Card";
import Container from "@/components/Container";
import LoadingPage from "@/components/LoadingPage";
import UserBadge from "@/components/UserBadge";
import useFetch from "@/hooks/useFetch";
import useGreeting from "@/hooks/useGreeting";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Main() {
  const { data: session } = useSession();
  const { greeting } = useGreeting();
  const {
    spotifyData: newAlbumData,
    fetchData: getNewAlbumData,
    isLoading,
  } = useFetch();
  const {
    spotifyData: featuredPlaylistData,
    fetchData: getFeaturedPlaylistData,
  } = useFetch();
  const firstName = session?.user?.name?.split(" ");

  useEffect(() => {
    getFeaturedPlaylistData(
      `https://api.spotify.com/v1/browse/featured-playlists`
    );
    getNewAlbumData(`https://api.spotify.com/v1/browse/new-releases`);
  }, [session]);

  if (isLoading)
    return (
      <div className="w-full h-screen">
        <LoadingPage center={true} />
      </div>
    );

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide flex-grow">
      <Container>
        <div className="flex items-center justify-end lg:justify-between lg:mt-3">
          <h1 className="hidden lg:block lg:text-xl xl:text-2xl font-extrabold">
            {greeting}
            {session?.user?.name}
          </h1>
          <UserBadge />
        </div>
        <div>
          <h1 className="my-5 text-lg lg:hidden">
            {greeting} {firstName?.[0]}
          </h1>

          <h1 className="mb-5 lg:mt-12 text-lg font-extrabold md:text-xl xl:text-2xl">
            {featuredPlaylistData?.message}
          </h1>
          <Card
            items={featuredPlaylistData?.playlists?.items}
            href="playlist"
          />
          <h1 className="mt-20 mb-3 xl:mb-7 text-lg font-extrabold md:text-xl xl:text-2xl">
            New Release Albums
          </h1>
          <Card
            items={newAlbumData?.albums?.items}
            rounded={false}
            href="album"
          />
        </div>
      </Container>
    </div>
  );
}

export default Main;
