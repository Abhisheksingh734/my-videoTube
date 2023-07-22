import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className=" w-[461px] sm:w-[304px] md:h-[320px] md:hover:scale-105 sm:mx-4 sm:my-2 h-fit my-2 rounded-lg bg-gray-100  shadow-xl  transition-all ease-in-out hover:shadow-2xl">
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
