import React from "react";

const Song = ({ title, singer, cover }) => {
  return (
    <div className="flex items-center justify-between  bg-blue-700/30">
      <div className="flex w-full h-full">
        <img
          src={cover}
          alt=""
          className="w-24 object-cover p-[1px] bg-white"
        />
      </div>
      <div className="pr-8 text-end -my-20 w-full h-full">
        <p className="text-[28px]">{title}</p>
        <p className="">{singer}</p>

      </div>
    </div>
  );
};
export default Song;
