import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function TracksTable({ tracksData }) {
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div>
      {tracksData?.map((data, index) => (
        <div
          key={data?.track?.id || data?.id}
          className="group hover:bg-neutral-900 p-2 px-2.5 cursor-default rounded-md w-full grid grid-cols-2 my-3"
        >
          <div className="flex space-x-1.5 md:space-x-3 xl:space-x-4">
            {/* Title */}
            <div className="relative self-center">
              <p className="text-xs mr-1.5 font-thin group-hover:opacity-0">
                {index + 1}
              </p>
              <button className="absolute top-0 -left-1 opacity-0 group-hover:opacity-100">
                <PlayIcon className="w-4 text-green-500" />
              </button>
            </div>
            <img
              src={
                data?.track?.album?.images[0]?.url ||
                data?.album?.images[0]?.url
              }
              alt="track-image"
              className="w-10 h-10 object-cover"
            />
            <div className="w-32 lg:w-56 self-end md:ml-1.5">
              <p className="text-sm lg:text-base truncate">
                {data?.track?.name || data?.name}
              </p>
              <div className="text-xs lg:text-sm text-gray-500 truncate">
                <Link
                  href={`/artist/${
                    data?.track?.artists[0]?.id || data?.artists[0]?.id
                  }`}
                  className="hover:underline"
                >
                  {data?.track?.artists[0]?.name || data?.artists[0]?.name}
                </Link>
                {data?.track?.artists.length === 1 ||
                data?.artists?.length === 1
                  ? null
                  : ", "}
                <Link
                  href={`/artist/${
                    data?.track?.artists[1]?.id || data?.artists?.[1]?.id
                  }`}
                  className="hover:underline"
                >
                  {data?.track?.artists[1]?.name || data?.artists?.[1]?.name}
                </Link>
              </div>
            </div>
          </div>

          {/* Album and Time Duration */}
          <div className="flex items-center justify-between ml-auto xl:ml-0">
            <p className="hidden xl:inline font-extralight truncate w-48 text-sm text-gray-300 cursor-pointer hover:underline">
              {data?.track?.album?.name || data?.album?.name}
            </p>
            <p className="text-xs lg:text-sm font-extralight">
              {millisToMinutesAndSeconds(
                data?.track?.duration_ms || data?.duration_ms
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TracksTable;
