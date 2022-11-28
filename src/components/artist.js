import React from "react";
import artistimg1 from "../assets/artist/arijit.jpg";
import artistimg2 from "../assets/artist/atif.jpg";
import artistimg3 from "../assets/artist/zayn.jpg";
import artistimg4 from "../assets/artist/liam.jpg";
import artistimg5 from "../assets/artist/jb.jpg";

function Artist() {
  const artists = [
    {
      photo: artistimg1,
    },
    {
      photo: artistimg2,
    },
    {
      photo: artistimg3,
    },
    {
      photo: artistimg4,
    },
    {
      photo: artistimg5,
    },
  ];
  return (
    <div className="mt-40">
      <h1 className="text-white flex justify-center font-bold text-[40px] -mb-12">
        Artist
      </h1>
      <div className="lg:flex flex-col items-center -space-x-12 text-white mx-auto justify-center pt-20 mb-40">
        <div className="flex items-center">
          {artists.map((image) => (
            <div className="flex h-40 w-40">
              <img
                src={image.photo}
                alt=""
                className="object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <div className="text-white pt-12">
          <p className="flex justify-center text-[20px] lg:text-[30px]">Subscribe To The Playlist</p>
          <div className="flex justify-center">
            <button className="bg-white/80 text-black rounded font-semibold px-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
