"use client";

import Container from "@/components/Container";
import SearchGenreCard from "@/components/SearchGenreCard";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import UserBadge from "@/components/UserBadge";
import useFetch from "@/hooks/useFetch";
import useGreeting from "@/hooks/useGreeting";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Search() {
  const { data: session } = useSession();
  const { spotifyData: searchData, fetchData: getSearchData } = useFetch();
  const { greeting } = useGreeting();
  const firstName = session?.user?.name?.split(" ");
  const [query, setQuery] = useState("");
  const [queryGenre, setQueryGenre] = useState("");

  useEffect(() => {
    getSearchData(
      "https://api.spotify.com/v1/search?" +
        new URLSearchParams({
          q: query || queryGenre,
          type: ["album", "artist", "playlist", "track"],
        })
    );
  }, [session, query, queryGenre]);

  useEffect(() => {
    function clearQueryGenre() {
      if (query === "") {
        setQueryGenre("");
      }
    }
    clearQueryGenre();
  }, [query]);

  return (
    <div className="h-screen w-full overflow-y-scroll scrollbar-hide pb-20">
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

          {query || queryGenre ? (
            <SearchResults searchData={searchData} />
          ) : (
            <SearchGenreCard setQueryGenre={setQueryGenre} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Search;
