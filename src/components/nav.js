import React from "react";
import logo from "../assets/logo/spotmz.png";
import { IoMdHome } from "react-icons/io";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdPlaylistPlay } from "react-icons/md";
import { MdSearch } from "react-icons/md";
function nav() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 pt-2">
      {/* Left */}
      <div className="">
        <img src={logo} alt="" className="w-[200px]" />
      </div>
      {/* Middle */}
      <div className="">
        <ul className="flex items-center gap-x-6 lg:gap-10">
          <li>
            <IoMdHome className="navbtn" />
            <p className="hidden lg:flex text-[20px] font-bold">Home</p>
          </li>
          <li>
            <RiCompassDiscoverLine className="navbtn" />
            <p className="hidden lg:flex text-[20px] font-bold">Explore</p>
          </li>
          <li>
            <MdPlaylistPlay className="navbtn" />
            <p className="hidden lg:flex text-[20px] font-bold">Playlist</p>
          </li>
          <li>
            <MdSearch className="navbtn" />
            <p className="hidden lg:flex text-[20px] font-bold">Search</p>
          </li>
        </ul>
      </div>
      {/* Right */}
      <div className="bg-white px-2.5 py-1 rounded-[0.3rem]">
        <button className="text-black font-bold">LOG IN</button>
      </div>
    </div>
  );
}

export default nav;
