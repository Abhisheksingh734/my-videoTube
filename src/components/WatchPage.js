import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-[460px] md:w-full md:p-4">
      <div className="flex flex-wrap md:flex md:w-full">
        <div>
          <iframe
            className="w-[461px] h-[300px] md:w-[1200px] md:h-[600px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-[600px] md:p-2 ">
          <LiveChat />
        </div>
      </div>
      <div className="w-[450px] md:w-auto">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
