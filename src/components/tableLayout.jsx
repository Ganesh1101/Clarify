import React, { useState } from "react";
import "../assets/Styles/styles.css";

const TableLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="table-layout-container">
      {/* Tabs for Summary, Events & Logs, Reports */}
      <div className="tabs">
        <button
          className={activeTab === "summary" ? "tab active" : "tab"}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className={activeTab === "events" ? "tab active" : "tab"}
          onClick={() => setActiveTab("events")}
        >
          Events & Logs
        </button>
        <button
          className={activeTab === "reports" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reports")}
        >
          Reports
        </button>
      </div>

      {/* Search Bar and Buttons */}
      <div className="header-section">
        <div className="search-container">
        <div className="search-bar">
        <img  src={require ("../assets/Images/ic_search.png")}/>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <button className="filter-button"> <img  src={require ("../assets/Images/ic_filter.png")} /></button>
        </div>
       
        <div className="buttons">
          <button className="button-runList"><img src={require ("../assets/Images/ic_runList.png")} />Run List</button>
          <button className="button-execute"><img src={require ("../assets/Images/ic_execute.png")} />Execute</button>
        </div>
      </div>

      {/* Table Content */}
      {activeTab === "summary" && <div className="table-container">{children}</div>}
    </div>
  );
};

export default TableLayout;
