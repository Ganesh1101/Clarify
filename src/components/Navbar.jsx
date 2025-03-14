import React, { useState } from "react";
import "../assets/Styles/styles.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <img src={require("../assets/Images/Logo.png")} alt="Logo" />
        </div>

        {/* Product Name Dropdown */}
        <div
          className={`product-section ${dropdownOpen ? "dropdown-open" : ""}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="product-name">
            Product Name
            <img
              src={require("../assets/Images/Plain Icons.png")}
              alt="▼"
              className="dropdown-arrow"
            />
          </span>

          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            <div>Option 1</div>
            <div>Option 2</div>
            <div>Option 3</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="nav-right">
          {/* Toggle Button */}
          <div className="toggle-container" onClick={() => setDarkMode(!darkMode)}>
            <div className={`toggle-switch ${darkMode ? "toggle-active" : ""}`}>
              <div className="toggle-circle"></div>
              <img 
                src={darkMode ? require("../assets/Images/moon.png") : require("../assets/Images/sun.png")} 
                alt={darkMode ? "Moon" : "Sun"} 
                className={`toggle-icon ${darkMode ? "moon" : "sun"}`}
              />
            </div>
          </div>
   
          <div className="notification">
            <img src={require("../assets/Images/ic_bell.png")} alt="" />
          </div>
          <div className="profile">
            <img src={require("../assets/Images/ic_profile.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;