import React from "react";
import "../assets/Styles/styles.css"; // Import the stylesheet

const KPIWidget = ({ data }) => {
  return (
    <div className="kpi-widget">
      {/* Top Row: Image + KPI Values */}
      <div className="kpi-top">
        {/* Left Icon */}
        <img src={data.icon} alt="KPI Icon" className="card-icon" />

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
      <div className="card-footer">
      <a href={data.link} className="card-link">
          View Details
        </a>
        {/* Percentage Badge */}
        <div className="card-percentage">📈 {data.percentage}%</div>

        {/* Clickable Link */}
        
      </div>
    </div>
  );
};

export default KPIWidget;
