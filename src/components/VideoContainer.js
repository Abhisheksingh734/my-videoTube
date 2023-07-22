import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const ytVideos = process.env.REACT_APP_YOUTUBE_VIDEOS_URL;
  const ytApiKey = process.env.REACT_APP_API_KEY;
  console.log(ytVideos);
  console.log(ytApiKey);

  const getVideos = async () => {
    const data = await fetch(ytVideos + ytApiKey);
    const json = await data.json();
    console.log(json);

    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (videos === null) return <Shimmer />;

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
