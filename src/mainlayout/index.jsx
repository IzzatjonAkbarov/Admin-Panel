import React from "react";
import Aside from "../components/aside";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="flex h-screen">
      <header>
        <Aside />
      </header>

      <div className="w-full h-[100vh]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
