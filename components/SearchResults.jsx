import Card from "./Card";
import SearchCard from "./SearchCard";
import TracksTable from "./TracksTable";

function SearchResults({ searchData }) {
  return (
    <div className="mt-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-3 xl:gap-5">
        <div className="lg:mt-5">
          <h2 className="mb-2 font-bold text-lg md:text-xl xl:text-2xl">
            Top result
          </h2>
          <SearchCard searchData={searchData?.playlists} />
        </div>
        <div>
          <h2 className="mb-2 mt-5 font-bold text-lg md:text-xl xl:text-2xl">
            Songs
          </h2>
          <div className="h-[330px] md:h-[350px] lg:h-[300px] scrollbar-hide overflow-y-scroll w-full">
            <TracksTable tracksData={searchData?.tracks?.items} hidden={true} />
          </div>
        </div>
      </div>

      {/* Artists Section */}
      <div>
        <h2 className="mb-2 mt-10 font-bold text-lg md:text-xl xl:text-2xl">
          Artists
        </h2>

        <div className="md:mt-5">
          <Card
            items={searchData?.artists?.items}
            rounded={true}
            type="Artist"
            href="artist"
          />
        </div>
      </div>

      {/* Albums Section */}
      <div>
        <h2 className="mb-2 mt-10 font-bold text-lg md:text-xl xl:text-2xl">
          Albums
        </h2>

        <div className="md:mt-5">
          <Card
            items={searchData?.albums?.items}
            rounded={false}
            type="Album"
            href="album"
          />
        </div>
      </div>

      {/* Playlists Section */}
      <div>
        <h2 className="mb-2 mt-10 font-bold text-lg md:text-xl xl:text-2xl">
          Playlists
        </h2>

        <div className="md:mt-5">
          <Card
            items={searchData?.playlists?.items}
            rounded={false}
            type="Playlist"
            href="playlist"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
