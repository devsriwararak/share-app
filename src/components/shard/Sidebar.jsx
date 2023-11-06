import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/consts/Navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex item-center gap-2 font-light px-3 py-2 hover:bg-purple-200 hover:text-white  rounded-sm ";

const Sidebar = ({ openSidebar, setOpenSideBar }) => {
  const [active, setActive] = useState(false);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      className={`fixed top-0  left-0 h-screen w-60 p-3 text-white shadow-md border-r-2 bg-white z-10   ${
        openSidebar
          ? "md:w-60 md:static md:top-auto md:left-auto md:shadow-none md:border-0"
          : "hidden md:block md:static md:top-auto md:left-auto md:shadow-none md:border-0"
      }`}
    >
      <p className="text-red-500"> ele : {open}</p>

      <div className="flex items-center gap-2 px-1 py-2 justify-center ">
        <FaBeer fontSize={24} color="purple" />
        <span
          className="text-gray-700 font-bold text-lg cursor-pointer"
          onClick={() => setOpenSideBar(!openSidebar)}
        >
          APP-SHARE
        </span>
      </div>

      <div className="flex-1 py-5 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink
            key={item.key}
            item={item}
            handleOpen={handleOpen}
            open={open}
          >
            {/* {item.label} */}
          </SidebarLink>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-gray-400">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}

        <div className={classNames("text-red-500 cursor-pointer", linkClasses)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item, handleOpen, open }) {
  const { pathname } = useLocation();
  let filteredData;
  let filteredData2;

  return (
    <div>
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path
            ? "bg-purple-400 bg-opacity-20 text-purple-500 "
            : "text-gray-700",
          linkClasses
        )}
        onClick={() => handleOpen(item?.submenuActive)}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>

      {item?.submenuActive === 1 &&
        ((filteredData = item?.submenu?.map((item) => {
          return item;
        })),
        open === 1 && (
          <ul className="text-xl text-red-500 ">
            {JSON.stringify(filteredData)}
          </ul>
        ))}

      {item?.submenuActive === 2 &&
        ((filteredData = item?.submenu?.map((item) => {
          return item;
        })),
        open === 2 && (
          <ul className="text-xl text-red-500 ">
            {JSON.stringify(filteredData)}
          </ul>
        ))}
    </div>
  );
}
