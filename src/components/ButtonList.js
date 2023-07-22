import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonList = () => {
  const btnList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "News",
    "Cooking",
    "Football",
    "Cricket",
    "Science",
    "PodCasts",
    "Computer Programming",
    "Manga",
    "Anime",
    "Trailers",
  ];
  return (
    <div className=" hidden sm:block sm:flex">
      {btnList.map((btnName, index) => {
        return <ButtonComponent name={btnName} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
