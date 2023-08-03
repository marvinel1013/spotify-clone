const cardData = [
  {
    id: 1,
    title: "OPM",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Pop",
    bgColor: "bg-green-800",
  },
  {
    id: 3,
    title: "Hip-Hop",
    bgColor: "bg-orange-700",
  },
  {
    id: 4,
    title: "K-pop",
    bgColor: "bg-purple-600",
  },
  {
    id: 5,
    title: "Rock",
    bgColor: "bg-red-700",
  },
  {
    id: 6,
    title: "Chill",
    bgColor: "bg-yellow-500",
  },
  {
    id: 7,
    title: "R&B",
    bgColor: "bg-indigo-600",
  },
  {
    id: 8,
    title: "Jazz",
    bgColor: "bg-rose-700",
  },
  {
    id: 9,
    title: "Reggae",
    bgColor: "bg-teal-700",
  },
  {
    id: 10,
    title: "Classical",
    bgColor: "bg-stone-500",
  },
];

function SearchGenreCard() {
  return (
    <div className="mt-5 xl:mt-10 xl:px-3">
      <h1 className="text-lg mb-3 md:text-xl lg:text-2xl xl:text-3xl xl:mb-8 md:mb-5 font-black">
        Browse all
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6 lg:gap-7 gap-4 cursor-default">
        {cardData.map((data) => (
          <div
            key={data.id}
            className={`${data.bgColor} rounded-lg w-full md:h-[180px] lg:h-[200px] h-[130px] p-5 px-3`}
          >
            <h1 className="font-black text-xl md:text-2xl">{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchGenreCard;
