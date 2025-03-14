import React, { useState } from "react";
import "../assets/Styles/styles.css";
import CardList from "../components/cardList";
import { Link } from "react-router-dom";
import TableLayout from "../components/tableLayout";
import Table from "../components/table";

const Release = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const versions = ["v1.0", "v2.0", "v3.0"];

    const handleVersionChange = (version) => {
        console.log("Selected Version:", version);
        setIsDropdownOpen(false);
    };

    const cardsData = [
        {
            icon: require("../assets/Images/ic_testcases.png"),
            heading: "KPI 1",
            value: "345",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
        },
        {
            icon: require("../assets/Images/ic_green.png"),
            heading: "KPI 2",
            value: "87",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
        },
        {
            icon: require("../assets/Images/ic_blue.png"),
            heading: "KPI 3",
            value: "1.2",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
            heading2: "KPI 4",
            value2: "0.8",
        },
        {
            icon: require("../assets/Images/ic_yellow.png"),
            heading: "KPI 5",
            value: "78%",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
        },
    ];

    const columns = [
        { key: "runList", label: "Run List" },
        { key: "testGroup", label: "Test Group" },
        { key: "testDescription", label: "Test Description" },
        { key: "setup", label: "Setup" },
        { key: "deviceUnderTest", label: "Device Under Test" },
        { key: "noOfTCs", label: "No. of TCs" },
        { key: "scheduledOn", label: "Scheduled On" },
        { key: "progress", label: "Progress" },
        { key: "status", label: "Status" },
    ];

    const data = [
        {
            runList: "RL#1_RLName",
            testGroup: "#00124_TGName",
            testDescription: "Test Description",
            setup: "Setup Info",
            deviceUnderTest: "Device Info",
            noOfTCs: "60/10/10",
            scheduledOn: "DD-MM-YYYY HH:MM",
            progress: "55%",
            status: "In Progress",
        },
        {
            runList: "RL#2_RLName",
            testGroup: "#00125_TGName",
            testDescription: "Test Description",
            setup: "Setup Info",
            deviceUnderTest: "Device Info",
            noOfTCs: "40/10/10",
            scheduledOn: "DD-MM-YYYY HH:MM",
            progress: "0%",
            status: "Pending",
        },
        {
            runList: "RL#3_RLName",
            testGroup: "#00126_TGName",
            testDescription: "Test Description",
            setup: "Setup Info",
            deviceUnderTest: "Device Info",
            noOfTCs: "10/10/10",
            scheduledOn: "DD-MM-YYYY HH:MM",
            progress: "0%",
            status: "Pending",
        },
    ];

    return (
        <div>
            {/* Header Section with Release Version Dropdown */}
            <div className="release-header">
                {/* Left-aligned Release Title */}
                <h1 className="heading">Release</h1>

                {/* Right-aligned Release Version & Info Icon */}
                <div className="release-right-section">
                    <div
                        className={`release-dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span className="release-version-label">
                            Release Ver.
                            <img
                                src={require("../assets/Images/Plain Icons.png")}
                                alt="▼"
                                className="dropdown-arrow"
                            />
                        </span>

                        {/* Dropdown Options */}
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                {versions.map((version) => (
                                    <li key={version} onClick={() => handleVersionChange(version)}>
                                        {version}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Info Icon next to Release Version */}
                    <img
                        src={require("../assets/Images/ic_info.png")}
                        alt="Info"
                        className="release-info-icon"
                    />
                </div>
            </div>

                    
            {/* Breadcrumbs */}
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-arrow">›</span>
                <span className="breadcrumb-current">Release</span>
            </div>

            {/* Cards Section */}
            <CardList cards={cardsData} />

            {/* Table Section */}
            <TableLayout>
                <Table columns={columns} data={data} />
            </TableLayout>
        </div>
    );
};

export default Release;
