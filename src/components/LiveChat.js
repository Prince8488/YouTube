import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20) + "🚀",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  });

  const handleInputValue = (e) => {
    setLiveMessage(e.target.value);
  };
  return (
    <>
      <div className="flex w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 dark:bg-black rounded-lg overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessage.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 bg-white w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: generateRandomName(),
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
          className="flex p-2 ml-2 border border-black border-double w-full"
        >
          <div className="flex w-full">
            <input
              className="border border-black px-2 w-full"
              type="text"
              value={liveMessage}
              onChange={(e) => handleInputValue(e)}
            />
            <button className="px-2 mx-10 bg-green-300">send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
