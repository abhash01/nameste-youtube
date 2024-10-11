import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Cricket",
  "Football",
  "Tennis",
  "Movies",
  "Music",
  "JavaScript",
  "Tool",
  "DSA",
  "Java",
  "Entertain",
  "Travel",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name) => {
        return <Button name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
