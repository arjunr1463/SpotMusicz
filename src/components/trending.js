import React from "react";
import { ImMusic } from "react-icons/im";
import cover1 from '../assets/songs/chainsmokers.jpg'
import cover2 from '../assets/songs/ed sheeran.jpg'
import cover3 from '../assets/songs/harry.webp'
import cover4 from '../assets/songs/JB.jpg'
import cover5 from '../assets/songs/passenger.jpg'
import cover6 from '../assets/songs/zayn.webp'
import Song from './song'

function trending() {
    const songs=[
    {title:"Closer",Singer:"The Chainsmokers",cover:cover1},
    {title:"Perfect",Singer:"Ed Sheeran",cover:cover2},
    {title:"All it was",Singer:"Harry Styles",cover:cover3},
    {title:"Ghost",Singer:"Justin Bieber",cover:cover4},
    {title:"Let Her Go",Singer:"Passenger",cover:cover5},
    {title:"It's you",Singer:"Zayn Malik",cover:cover6},
    ]
  return (
    <div className="text-white px-4 lg:max-w-[75vw] mx-auto mt-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="pt-8">
          <p className="text-[18px]">MOST POPULAR SONGS NOW</p>
          <p className="text-[40px] font-bold mb-1">Trending</p>
        </div>
        <ImMusic className="text-[50px]" />
      </div>

      {/* songs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4">
        {songs.map((song)=>(
            <Song title={song.title} singer={song.Singer} cover={song.cover}/>
        )

        )}

      </div>




    </div>
  );
}

export default trending;
