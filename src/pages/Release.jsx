import React from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported
import CardList from '../components/cardList';
import { Link } from 'react-router-dom';

const Release = () => {
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

    return (
      <div>
      <h1 className="heading">Release</h1>
      <div style={{ display: "flex", gap: "10px" }}>
          <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-arrow">›</span>
          <span className="breadcrumb-current">Release</span>
      </div>
      <CardList cards={cardsData} />
  </div>
    );
};

export default Release;