import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateMessage,
  generateNames,
  generateProfileImages,
  generateRandomName,
  makeRandomMessage,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API POLING");

      dispatch(
        addMessage({
          name: generateNames(),
          message: generateMessage(),
          imgSrc: generateProfileImages(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className=" w-full  h-[600px] rounded-xl p-2 border overflow-scroll  flex flex-col-reverse">
      {chatMessages.map((c, index) => (
        <ChatMessage
          key={index}
          name={c.name}
          message={c.message}
          imgSrc={c.imgSrc}
        />
      ))}
    </div>
  );
};

export default LiveChat;
