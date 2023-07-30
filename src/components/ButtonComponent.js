import React from "react";
import { useSelector } from "react-redux";

const ButtonComponent = ({ name }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  return (
    <div>
      <button
        className={
          "px-3 py-1 m-2 bg-gray-300 rounded-3xl " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonComponent;
