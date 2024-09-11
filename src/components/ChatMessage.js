import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mb-2 shadow dark:shadow-white p-2">
      <div>
        <img
          className="w-8"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
      </div>
      <div className="mx-4 font-bold dark:text-white flex flex-row">
        <h4 className="pr-4">{name}</h4>
        <p className="font-normal">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
