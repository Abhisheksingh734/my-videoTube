import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (videos === null) return <h1>Loading</h1>;

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watchpage?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
