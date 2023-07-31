"use client";

import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Artist({ params }) {
  const { spotifyData, fetchData } = useFetch();
  const { data: session } = useSession();
  console.log("ARTIST DATA:", spotifyData);
  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/artists/${params.id}`);
  }, [session]);

  return <div>Artist</div>;
}

export default Artist;
