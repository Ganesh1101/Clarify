import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <img src={require("../assets/Images/Logo.png")} alt="Logo" />
        </div>

        {/* Product Name + Plain Icon */}
        <div className="product-section">
          <span className="product-name">Product Name</span>
          <img src={require("../assets/Images/Plain Icons.png")}alt="" className="plain-icon" />
        </div>

        {/* Right Section: Toggle, Notification, Profile */}
        <div className="nav-right">
          {/* Toggle Image */}
          <div className="toggle">
            <img src={require("../assets/Images/ic_toggle.png")} alt="" />
          </div>

          {/* Notification Icon */}
          <div className="notification">
            <img src={require("../assets/Images/ic_bell.png")} alt="" />
          </div>

          {/* Profile Image */}
          <div className="profile">
            <img src={require("../assets/Images/ic_profile.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
