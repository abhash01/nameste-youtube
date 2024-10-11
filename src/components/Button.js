import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-gray-200 px-5 py-2 m-2 rounded-lg cursor-pointer">
      {name}
    </div>
  );
};

export default Button;
