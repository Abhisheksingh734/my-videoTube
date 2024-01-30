import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { thumbnails, title, channelTitle } = snippet;

  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  return (
    <div
      className={
        " w-[460px] sm:w-[280px] md:h-[345px] md:hover:scale-95 sm:mx-4 sm:my-2 h-fit my-2 rounded-lg bg-gray-100  shadow-xl  transition-all ease-in-out hover:shadow-2xl " +
        (isDarkTheme && "bg-gray-900 hover:shadow-lg hover:shadow-slate-300")
      }
    >
      <img
        className=" cursor-pointer w-full sm:rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className="py-1 px-1 font-bold text-lg">{title}</li>
        <li className="pb-1 px-1">{channelTitle}</li>
        <li className="px-1">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
