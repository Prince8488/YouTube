import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 mr-1 m-5 bg-gray-300 rounded-lg font-semibold dark:bg-gray-600 dark:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
