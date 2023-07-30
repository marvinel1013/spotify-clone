import { shuffle } from "lodash";
import { useEffect, useState } from "react";

function Cover(props) {
  const { children, subtitle, title, followers, image } = props;
  const [coverColor, setCoverColor] = useState(null);

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

  useEffect(() => {
    setCoverColor(shuffle(colors).pop());
  }, []);

  return (
    <div
      className={`w-full h-[250px] bg-gradient-to-b ${coverColor} to-black px-3 flex flex-col justify-between pb-9`}
    >
      {children}

      <div className="flex items-end gap-3 ">
        <img src={image} alt="playlist-image" className="w-20" />
        <div>
          <h3 className="text-gray-400 tracking-wider font-light text-xs mb-1">
            {subtitle}
          </h3>
          <h1 className="font-bold text-lg">{title}</h1>
          <h4>{followers}</h4>
        </div>
      </div>
    </div>
  );
}

export default Cover;
