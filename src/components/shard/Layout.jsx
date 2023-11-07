import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContent } from "../../auth/AuthWrapper";

const Layout = () => {

  const [openSidebar, setOpenSideBar] = useState(false);
  const testData = useContext(AuthContent)

  if (!testData?.token) {
    return <Login setToken={testData?.setToken}  />;
  }  

  useEffect(()=>{

  
  },[])

  return (
    <div className="flex flex-row  h-screen      w-screen overflow-y-scroll ">
      <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

      <div className=" flex-1     ">
        <Header openSidebar={openSidebar} setOpenSideBar={setOpenSideBar} />

        <Toaster position="top-right" reverseOrder={false} />

        <div className="p-4 bg-gray-200 w-full mt-16   ">
          <div>{<Outlet />}</div>
        </div>
      </div>
   
    </div>
  );
};

export default Layout;

