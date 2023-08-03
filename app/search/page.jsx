"use client";

import Container from "@/components/Container";
import SearchGenreCard from "@/components/SearchGenreCard";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import UserBadge from "@/components/UserBadge";
import useGreeting from "@/hooks/useGreeting";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Search() {
  const { data: session } = useSession();
  const { greeting } = useGreeting();
  const firstName = session?.user?.name?.split(" ");
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  async function getSearchData() {
    try {
      if (session?.accessToken || session?.refreshToken) {
        const response = await fetch(
          "https://api.spotify.com/v1/search?" +
            new URLSearchParams({
              q: query,
              type: ["album", "artist", "playlist", "track"],
            }),
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
        setSearchData(data);
        setIsLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getSearchData();
  }, [session, query]);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
    }
  }, [query]);

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
        <div className="lg:px-2">
          <h1 className="my-5 text-lg lg:hidden">
            {greeting} {firstName?.[0]}
          </h1>

          {/* Search Box */}
          <SearchInput query={query} setQuery={setQuery} />

          {/* Search Results */}
          {query ? (
            <SearchResults searchData={searchData} isLoading={isLoading} />
          ) : (
            <SearchGenreCard />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Search;
