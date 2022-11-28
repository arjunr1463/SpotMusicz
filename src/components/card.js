import React from "react";

function card({ title, singer, cover }) {
  return (
    <div className="">
      <div>
        <img src={cover} alt="" className="w-50" />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="text-white/75">{singer}</p>
      </div>
    </div>
  );
}

export default card;
