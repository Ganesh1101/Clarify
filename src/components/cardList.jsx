
import React from "react";
import "../assets/Styles/styles.css";
import Card from "./card";
import KPIWidget from "./KPIWidget"; // Import KPIWidget component

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) =>
        index === 2 ? ( // Check if it's the third item (index 2)
          <KPIWidget key={index} data={card} />
        ) : (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            value={card.value}
            percentage={card.percentage}
            linkText={card.linkText}
            onClick={card.onClick}
          />
        )
      )}
    </div>
  );
};

export default CardList;
