import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mb-10">
      <div>
        <img
          className="w-12"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
      </div>
      <div className="mx-4 font-bold dark:text-white">
        <h4>
          {name} &nbsp;
          <span className="text-gray-400 font-normal">10 days ago</span>
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
