import React from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported
import CardList from '../components/cardList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const cardsData = [
        {
            icon: require("../assets/Images/ic_testcases.png"),
            heading: "Total Test Cases",
            value: "345",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
        },
        {
            icon: require("../assets/Images/ic_green.png"),
            heading: "Total Test Runs",
            value: "87",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
        },
        {
            icon: require("../assets/Images/ic_blue.png"),
            heading: "Execution Rate",
            value: "1.2",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
            heading2: "Re-Execution Rate",
            value2: "0.8",

        },

        {
            icon: require("../assets/Images/ic_yellow.png"),
            heading: "Parallel Run Efficiency",
            value: "78%",
            percentage: "10.0",
            linkText: "View All",
            onClick: (title) => alert(`${title} clicked!`),
        },

    ];

    return (
        <div>
            <h1 className="heading">Dashboard</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
                <Link to="/" className="breadcrumb-link">Home</Link>
            </div>
            <CardList cards={cardsData} />
        </div>
    );
};

export default Dashboard;