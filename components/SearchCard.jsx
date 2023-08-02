import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function SearchCard({ searchData }) {
  const data = searchData?.items?.[0];

  return (
    <div className="relative group w-full lg:w-[380px] bg-neutral-900 h-[230px] md:h-[240px] lg:h-[300px] xl:w-[550px] rounded-md p-3 px-4 flex flex-col">
      <div>
        <img
          src={data?.images?.[0]?.url}
          alt="artist-image"
          className="w-28 md:w-32 lg:w-40 rounded-md"
        />

        <h1 className="mt-4 font-bold truncate pr-2 lg:text-xl">
          {data?.name}
        </h1>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <p className="text-gray-400">By spotify</p>
        <p className="text-sm bg-neutral-950 p-1 px-2 rounded-full">Playlist</p>
      </div>
      <Link
        href={`/playlist/${data?.id}`}
        className="absolute right-5 bottom-[30%] group-hover:bottom-[43%] opacity-0 group-hover:opacity-100 duration-150 ease-in"
      >
        <PlayCircleIcon className="w-14 text-green-500" />
      </Link>
    </div>
  );
}

export default SearchCard;
