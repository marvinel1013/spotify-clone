"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

function useFetch() {
  const { data: session } = useSession();
  const [spotifyData, setSpotifyData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(url) {
    setIsLoading(true);
    try {
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
        setIsLoading(false);
      }
    } catch (error) {
      throw new error();
    }
  }

  return { spotifyData, fetchData, isLoading };
}

export default useFetch;
