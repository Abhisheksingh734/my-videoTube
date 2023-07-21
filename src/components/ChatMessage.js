import React from "react";

const ChatMessage = ({ name, message, imgSrc }) => {
  return (
    <div className="flex bg-gray-100 rounded-md p-2 m-2">
      <img className="h-8 rounded-full" src={imgSrc} />
      <span className="font-bold mx-1 text-lg">{name}:</span>
      <span className="text-lg">{message}</span>
    </div>
  );
};

export default ChatMessage;
