import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import MainContainer from "./MainContainer";

const Body = () => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  return (
    <div className={"flex " + (isDarkTheme && " bg-gray-950 text-white")}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
