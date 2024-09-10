import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Videos",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Cooking",
  "Thrillers",
  "Mix",
];

const ButtonList = () => {
  return (
    <div className="fixed bg-white dark:bg-black z-10 flex w-full left-56 right-0 top-20 justify-start max-sm:left-0">
      {List.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
