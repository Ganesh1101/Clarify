// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideNavbar"; // Import your Sidebar component

const Layout = () => {
    
  const handleClick = (name) => {
    console.log(`${name} clicked`);
  };
  
  const menuItems = [
    { iconPath: require("../assets/Images/ic_reports.png"), route:"/" },
    { iconPath: require("../assets/Images/ic_release.png"), route:"/releases" },
    { iconPath: require("../assets/Images/ic_reports.png"), route:"/testcases" },
    { iconPath: require("../assets/Images/ic_Settings.png"), route:"/settings" },
  ];
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar items={menuItems}/>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", backgroundColor:"#F1F3F4" }}>
        <Outlet /> {/* This will render the current route's content */}
      </div>
    </div>
  );
};

export default Layout;
