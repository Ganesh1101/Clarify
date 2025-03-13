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
              isActive || (location.pathname === "/" && item.route === "/") ? "active" : ""
            }`
          }
          end // Ensures exact path matching
        >
          <img src={item.iconPath} alt="icon" className="sidebar-icon" />
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
