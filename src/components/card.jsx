import React from "react";
import "../assets/Styles/styles.css";

const Card = ({ icon, heading, value, percentage, linkText, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(heading)}>
      <div className="card-icon">
        <img src={icon} alt="Card Icon" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{heading}</h3>
        <h2 className="card-value">{value}</h2>
        <div className="card-footer">
          <a href="#" className="card-link">{linkText}</a>
          <span className="card-percentage">
            <img src={require("../assets/Images/ic_growth.png")} alt="Growth Icon"  /> {percentage}%
          </span>
        </div>
      </div>

    </div>
  );
};

export default Card;