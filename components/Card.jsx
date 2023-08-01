"use client";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

function Card({ relatedArtistsData, type, rounded }) {
  const [seeAll, setSeeAll] = useState(false);
  const cardNumber = seeAll ? 20 : 10;

  return (
    <div className="w-full h-full flex justify-center flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5 xl:gap-12 xl:px-10">
        {relatedArtistsData
          ?.filter((value, index) => index < cardNumber)
          ?.map((data) => (
            <div
              key={data?.id}
              className="group bg-neutral-900 flex flex-col items-center rounded-md relative w-36 md:w-40 xl:w-48 h-full p-2 xl:p-4 cursor-pointer"
            >
              <img
                src={data?.images?.[0]?.url}
                alt="artist-image"
                className={`w-32 h-32 xl:w-full xl:h-40 ${
                  rounded ? "rounded-full" : "rounded-md"
                } object-cover`}
              />

              <h3 className="text-sm lg:text-base text-center mt-2 mb-4">
                {data?.name}
              </h3>
              <Link
                href={`/artist/${data?.id}`}
                className="absolute right-3 bottom-[40%] opacity-0 group-hover:opacity-100 group-hover:bottom-[50%] duration-200 ease-in"
              >
                <PlayCircleIcon className="w-12 lg:w-14 xl:w-16 text-green-500" />
              </Link>
              <p className="mt-auto text-sm lg:text-base text-gray-400">
                {type}
              </p>
            </div>
          ))}
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <button
          onClick={() => setSeeAll((prev) => !prev)}
          className="text-center bg-neutral-900 px-4 border border-gray-500 p-1 rounded-full text-sm"
        >
          {seeAll ? "Show less" : "Show all"}
        </button>
      </div>
    </div>
  );
}

export default Card;
