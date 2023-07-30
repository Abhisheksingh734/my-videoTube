import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ name, message, imgSrc }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  return (
    <div
      className={
        "flex bg-gray-200 rounded-md p-2 m-2 " +
        (isDarkTheme && "bg-gray-800 text-white border-black")
      }
    >
      <img className="h-8 rounded-full" alt="" src={imgSrc} />
      <span className="font-bold mx-1 text-lg">{name}: </span>
      <span className="text-lg">{message}</span>
    </div>
  );
};

export default ChatMessage;
