import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] p-4 grid-cols-[15rem_1fr]">
      <Header />
      <SideBar />
      <div className="bg-secondary-200 box-shadow-[3px] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
