import React from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
            <h1 className="heading">Settings</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-arrow">›</span>
                <span className="breadcrumb-current">Settings</span>
            </div>
        </div>
  );
};

export default Settings;