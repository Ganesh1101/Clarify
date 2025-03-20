import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../assets/Styles/styles.css";

const Sidebar = ({ items }) => {
  const location = useLocation(); // Get the current route

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.route} // Navigate to the given route
          className={({ isActive }) =>
            `sidebar-item ${
              isActive || 
              (item.route === "/dashboard" && location.pathname === "/dashboard")
                ? "active" 
                : ""
            }`
          }
          end={item.route === "/" || item.route === "/dashboard"} // Exact match only for Home and Dashboard
        >
          <img src={item.iconPath} alt="icon" className="sidebar-icon" />
          <span className="sidebar-text">{item.label}</span> {/* Show text for accessibility */}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
