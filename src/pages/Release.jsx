import React from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported

const Release = () => {
    const cardsData = [
        {
          icon: "/icons/sales.png",
          heading: "Sales",
          value: "$12,500",
          percentage: "15",
          linkText: "View Details",
          onClick: (title) => alert(`${title} clicked!`),
        },
        {
          icon: "/icons/customers.png",
          heading: "Customers",
          value: "1,200",
          percentage: "8",
          linkText: "See More",
          onClick: (title) => alert(`${title} clicked!`),
        },
        {
          icon: "/icons/revenue.png",
          heading: "Revenue",
          value: "$50,000",
          percentage: "10",
          linkText: "Check Stats",
          onClick: (title) => alert(`${title} clicked!`),
        },
      ];
  return (
    <div>
      <h1 className="heading">Releases</h1>
      <p>Latest releases:</p>
      <ul>
        <li>Release 1: Brief description</li>
        <li>Release 2: Brief description</li>
        <li>Release 3: Brief description</li>
      </ul>
    </div>
  );
};

export default Release;