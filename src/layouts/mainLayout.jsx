import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideNavbar"; // Import your Sidebar component
import Navbar from "../components/navbar";

const Layout = () => {
  const handleClick = (name) => {
    console.log(`${name} clicked`);
  };
  const menuItems = [
    { iconPath: require("../assets/Images/ic_reports.png"), route: "/" },
    { iconPath: require("../assets/Images/ic_release.png"), route: "/releases" },
    { iconPath: require("../assets/Images/ic_reports.png"), route: "/testcases" },
    { iconPath: require("../assets/Images/ic_Settings.png"), route: "/settings" },
  ];

  return (
    <div style={{ height: "68px", display: "flex", flexDirection: "column" }}>
      {/* Navbar at the top */}
      <div style={{ width: "100%", position: "fixed", top: 0, zIndex: 100 }}>
        <Navbar />
      </div>

      {/* Main Layout */}
      <div style={{ display: "flex", flex: 1, marginTop: "68px" }}>
        {/* Sidebar below the navbar */}
        <div style={{ width: "114px", minWidth: "114px", backgroundColor: "#fff", height: "calc(100vh - 68px)", position: "fixed", left: 0, top: "68px" }}>
          <Sidebar items={menuItems} />
        </div>

        {/* Page Content */}
        <div style={{ marginTop: "68px", padding: "20px", backgroundColor: "#F1F3F4", flexGrow: 1 }}>
          <Outlet /> {/* This will render the current route's content */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
