import React from "react";
import "../assets/Styles/styles.css"; // Import the stylesheet

const KPIWidget = ({ data }) => {
  return (
    <div className="kpi-widget">
      {/* Top Row: Image + KPI Values */}
      <div className="kpi-top">
        {/* Left Icon */}
        <div className="card-icon" style={{ marginLeft: "-15px" }}>
          <img src={data.icon} alt="KPI Icon" style={{marginTop: "19px"}} />
        </div>

        {/* KPI Content (Two sections) */}
        <div className="kpi-content" style={{ marginLeft: "-18px", marginTop: "-15px" }}>  
          {/* KPI 1 Section */}
          <div className="kpi-section" style={{ marginRight: "3px" }}>
            <span className="card-title">{data.heading}</span>
            <div className="card-value">
              {data.value} <span className="kpi-unit">/sec</span>
            </div>
          </div>

          {/* KPI 2 Section */}
          <div className="kpi-section" style={{ marginLeft: "3px" }}>
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
          <img src={require("../assets/Images/ic_growth.png")} alt="Growth Icon" /> {data.percentage}%
        </span>
      </div>
    </div>
  );
};

export default KPIWidget;
