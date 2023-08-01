import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import UserBadge from "./UserBadge";

const colors = [
  "from-red-500",
  "from-purple-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-pink-500",
  "from-violet-500",
  "from-cyan-500",
];

function Cover(props) {
  const { subtitle, title, followers, image } = props;
  const [coverColor, setCoverColor] = useState(null);

  useEffect(() => {
    setCoverColor(shuffle(colors).pop());
  }, []);

  return (
    <div
      className={`w-full h-[250px] lg:h-[290px] xl:h-[370px] bg-gradient-to-b ${coverColor} to-black px-3 flex flex-col justify-between pb-9 xl:pb-14`}
    >
      <UserBadge />

      <div className="flex items-end gap-3 xl:pl-4">
        <img
          src={image}
          alt="playlist-image"
          className="object-cover w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-48 xl:h-48"
        />
        <div>
          <h3 className="text-gray-400 tracking-wider font-light text-xs lg:text-sm xl:text-base mb-1">
            {subtitle}
          </h3>
          <h1 className="font-bold text-lg md:text-xl md:font-extrabold lg:text-3xl xl:text-4xl xl:font-black">
            {title}
          </h1>
          <h4>
            <span className="text-xs xl:text-sm mr-1.5">{followers}</span>
            {followers && <span className="text-xs xl:text-sm">Followers</span>}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Cover;
