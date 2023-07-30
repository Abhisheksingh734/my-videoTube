import React, { useEffect, useState } from "react";
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
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const [LiveMessage, setLiveMessage] = useState("");

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
    <>
      <div
        className={
          " w-full  h-[600px] rounded-xl m-2 p-2 border overflow-scroll  flex flex-col-reverse " +
          (isDarkTheme && "bg-gray-600 border-black text-white")
        }
      >
        {chatMessages.map((c, index) => (
          <ChatMessage
            key={index}
            name={c.name}
            message={c.message}
            imgSrc={c.imgSrc}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Message Sent : ", LiveMessage);
          setLiveMessage("");
          dispatch(
            addMessage({
              name: "Me",
              message: LiveMessage,
            })
          );
        }}
        className={
          "border rounded-xl p-2 bg-gray-200 " + (isDarkTheme && "bg-gray-800")
        }
      >
        <input
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
          placeholder="Send Your Message"
          className={
            "-ml-1 border border-gray-500 rounded-lg mx-2 w-96 p-2 " +
            (isDarkTheme && "bg-black text-white border-black")
          }
        />
        <button
          className={
            "bg-green-200 rounded-xl p-2 " +
            (isDarkTheme && "text-black border-black")
          }
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
