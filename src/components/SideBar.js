import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="absolute md:relative shadow-2xl rounded-lg bg-white ">
      <div className="p-2 w-44  border border-gray-200 h-full">
        <ul className="">
          <Link to="/">
            <li className="p-2 border-b-2  text-lg mx-2 my-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              Home
            </li>
          </Link>
          <li className="p-2 border-b-2  text-lg mx-2 my-2  rounded-lg hover:bg-gray-200 cursor-pointer">
            Shorts
          </li>
          <li className="p-2 border-b-2 text-lg mx-2 my-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            Videos
          </li>
          <li className="p-2 border-b-2 text-lg mx-2 my-2  rounded-lg hover:bg-gray-200 cursor-pointer">
            Live
          </li>
        </ul>
        <h1 className="font-bold pt-8 text-xl">Subscriptions</h1>
        <ul className="border-gray-300  border-b-2 p-2">
          <li className=" text-lg mx-2 ">Music</li>
          <li className=" text-lg mx-2">Sports</li>
          <li className=" text-lg mx-2">Gaming</li>
          <li className=" text-lg mx-2">Movies</li>
        </ul>
        <h1 className="font-bold pt-10  text-xl">Watch Later</h1>
        <ul className=" border-gray-200 border-b-2 p-2">
          <li className=" text-lg mx-2">Music</li>
          <li className=" text-lg mx-2">Sports</li>
          <li className=" text-lg mx-2">Gaming</li>
          <li className=" text-lg mx-2">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
