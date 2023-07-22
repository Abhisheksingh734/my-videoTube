import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex sm:flex-wrap sm:justify-start">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
