"use client";

import Card from "@/components/Card";
import Container from "@/components/Container";
import LoadingPage from "@/components/LoadingPage";
import UserBadge from "@/components/UserBadge";
import useFetch from "@/hooks/useFetch";
import useGreeting from "@/hooks/useGreeting";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Library() {
  const { greeting } = useGreeting();
  const { data: session } = useSession();
  const {
    spotifyData: yourPlaylistData,
    fetchData: getYourPlaylistData,
    isLoading,
  } = useFetch();
  const firstName = session?.user?.name?.split(" ");

  useEffect(() => {
    getYourPlaylistData("https://api.spotify.com/v1/me/playlists");
  }, [session]);

  if (isLoading)
    return (
      <div className="w-full h-screen">
        <LoadingPage center={true} />
      </div>
    );

  return (
    <div className="h-screen w-full overflow-y-scroll scrollbar-hide">
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

          <h1 className="mt-5 mb-3 xl:mb-7 text-lg font-extrabold md:text-xl xl:text-2xl">
            Your Playlists
          </h1>

          <Card
            items={yourPlaylistData?.items}
            type={"Playlist by you"}
            rounded={false}
            href="playlist"
          />
        </div>
      </Container>
    </div>
  );
}

export default Library;
