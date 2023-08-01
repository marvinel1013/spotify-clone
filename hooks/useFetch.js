"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

function useFetch() {
  const { data: session } = useSession();
  const [spotifyData, setSpotifyData] = useState();

  async function fetchData(url) {
    if (session?.accessToken || session?.refreshToken) {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            session?.accessToken || session?.refreshToken
          }`,
        },
      });
      const data = await response.json();
      setSpotifyData(data);
    }
  }

  return { spotifyData, fetchData };
}

export default useFetch;
