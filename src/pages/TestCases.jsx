import React from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported
import CardList from '../components/cardList';

const TestCases = () => {
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
            heading: "Groups",
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
            heading2: "KPI 3",
            value2: "1.2",
    
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

    return (
        <div>
            <h1 className="heading">Test Cases</h1>
            <CardList cards={cardsData} />
        </div>
    );
};

export default TestCases;