import React from "react";
import Card from "./card";
import cover1 from "../assets/album/angelolsen.webp";
import cover2 from "../assets/album/kendrick.webp";
import cover3 from "../assets/album/masters.webp";
import cover4 from "../assets/album/shake.webp";
import cover5 from "../assets/album/electricity.webp";

function jazz() {
  const album = [
    {
      title: "Big Time",
      singer: "Angel Olsen",
      cover: cover1,
    },
    {
      title: "The Big Steppers",
      singer: "Kendrck Lamar",
      cover: cover2,
    },
    {
      title: "19 Masters",
      singer: "Saya Gray",
      cover: cover3,
    },
    {
      title: "You Can’t Kill Me",
      singer: "OOShake",
      cover: cover4,
    },
    {
      title: "Electricity",
      singer: "Ibibio Sound Machine",
      cover: cover5,
    },
  ];
  return (
    <div className="text-white px-4 lg:max-w-[75vw] mx-auto mt-12">
      <div className="flex items-center justify-between">
        <div className="pt-8">
          <p className="text-[18px]">TOP 5 ALBUMS</p>
          <p className="text-[40px] font-bold mb-1">Albums</p>
        </div>
      </div>
      {/*Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {album.map((song) => (
          <Card title={song.title} singer={song.singer} cover={song.cover} />
        ))}
      </div>
    </div>
  );
}

export default jazz;
