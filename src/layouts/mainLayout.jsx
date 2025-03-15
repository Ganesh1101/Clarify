import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideNavbar"; 
import Navbar from "../components/Navbar";

const Layout = () => {
  const menuItems = [
    { iconPath: require("../assets/Images/ic_reports.png"), route: "/" },
    { iconPath: require("../assets/Images/ic_release.png"), route: "/releases" },
    { iconPath: require("../assets/Images/ic_reports.png"), route: "/testcases" },
    { iconPath: require("../assets/Images/ic_Settings.png"), route: "/settings" },
  ];

  return (
    <div className="layout-container">
      {/* Top Navbar */}
      {/* <Navbar /> */}

      {/* Main Content with Sidebar and Dynamic Content */}
      <div className="content-container">
        {/* Sidebar */}
        {/* <Sidebar items={menuItems} /> */}

        {/* Main Dynamic Content */}
        <div className="main-content">
          <Outlet /> {/* This renders the current route's component */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
