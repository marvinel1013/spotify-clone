"use client";

import { usePlayData } from "@/hooks/usePlayData";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "@/public/spotify-logo.png";
import Image from "next/image";

function Playerbar() {
  const data = usePlayData((state) => state.playData);
  const imgData = usePlayData((state) => state.image);

  if (data === null) return null;

  return (
    <div className="fixed bg-gradient-to-b from-neutral-900 to-black px-2.5 py-1.5 lg:py-2 lg:px-4 bottom-0 right-0 left-0 z-10">
      <div className="grid grid-cols-2">
        <div className="flex items-center gap-1 md:gap-2">
          <img
            src={
              data?.track?.album?.images?.[0]?.url ||
              data?.album?.images[0]?.url ||
              imgData ||
              "/noimage.jpg"
            }
            alt="track-image"
            className="w-12 lg:w-16 rounded"
          />

          <div className="w-[120px] md:w-[200px] lg:w-[230px] xl:w-[400px]">
            <h1 className="text-xs md:text-sm lg:text-base truncate">
              {data?.track?.name || data?.name}
            </h1>
            <h2 className="text-xs lg:text-sm font-extralight text-gray-400 truncate">
              {data?.track?.artists[0]?.name || data?.artists[0]?.name}
              {data?.track?.artists.length === 1 || data?.artists?.length === 1
                ? null
                : ", "}
              {data?.track?.artists[1]?.name || data?.artists?.[1]?.name}
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={
              data?.track?.external_urls?.spotify ||
              data?.external_urls?.spotify
            }
            target="_blank"
            className="flex items-center bg-green-500 w-fit p-1 px-1.5 lg:p-2 xl:px-3 xl:py-1.5 rounded-full md:-ml-7 ml-auto"
          >
            <PlayCircleIcon className="w-6 lg:w-8 xl:w-10" />
            <p className="text-xs lg:text-sm xl:text-base xl:ml-2">
              Play in Spotify
            </p>
          </Link>

          <div className="hidden md:block">
            <Image src={Logo} alt="logo" className="w-20 lg:w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playerbar;
