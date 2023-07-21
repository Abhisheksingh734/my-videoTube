import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="h-[320px] rounded-lg p-2 m-2 bg-gray-100 w-[320px] shadow-lg hover:scale-105 transition-all ease-in-out hover:shadow-2xl">
      <img
        className="rounded-xl cursor-pointer"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
