import React from "react";
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function Layout() {
  return (
    <div className="grid grid-cols-12 gap-2 grid-rows-12 h-screen">
      <Topbar />
      <Sidebar />
      <div className="col-span-9 row-span-10 bg-orange-700">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
