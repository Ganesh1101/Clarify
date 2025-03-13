import React from "react";
import "../assets/Styles/styles.css"; // Import the stylesheet

const KPIWidget = ({ data }) => {
  return (
    <div className="kpi-widget" >
      {/* Top Row: Image + KPI Values */}
      <div className="kpi-top">
        {/* Left Icon */}
        <div className="card-icon">
          <img src={data.icon} alt="KPI Icon" />
        </div>
        {/* KPI Content (Two sections) */}
        <div className="kpi-content">
          {/* KPI 3 Section */}
          <div className="kpi-section">
            <span className="card-title">{data.heading}</span>
            <div className="card-value">
              {data.value} <span className="kpi-unit">/sec</span>
            </div>
          </div>

          {/* KPI 4 Section */}
          <div className="kpi-section">
            <span className="card-title">{data.heading2}</span>
            <div className="card-value">
              {data.value2} <span className="kpi-unit">/sec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Percentage + Link */}
      <div className="kpi-card-footer">
        <a href={data.link} className="kpi-card-link">
          View All
        </a>
        {/* Percentage Badge */}
        <span className="kpi-card-percentage">
            <img src={require("../assets/Images/ic_growth.png")} alt="Growth Icon"  /> {data.percentage}%
          </span>
        {/* Clickable Link */}

      </div>
    </div>
  );
};

export default KPIWidget;
