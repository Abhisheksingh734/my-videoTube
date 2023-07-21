import React from "react";

const ButtonComponent = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 m-2 bg-gray-300 rounded-3xl">{name}</button>
    </div>
  );
};

export default ButtonComponent;
