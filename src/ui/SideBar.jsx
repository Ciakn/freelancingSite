import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-1">
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink className="flex flex-row gap-1" to="/owner/dashboard">
            خانه <HiHome />{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/owner/sprojects"> <HiCollection/> پروژها</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
