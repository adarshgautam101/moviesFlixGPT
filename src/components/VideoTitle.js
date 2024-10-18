import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-lg  rounded-lg flex items-center hover:bg-opacity-50">
        <IoPlaySharp /> Play
        </button>
        <button className="bg-white mx-2 text-black p-4 px-12 text-lg  rounded-lg flex items-center hover:bg-opacity-50">
        <IoIosInformationCircleOutline /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
