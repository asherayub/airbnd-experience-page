import React from "react";
import data from "../data.js";
import Card from "./Card.jsx";
function Experience() {
  return (
    <div className="experience">
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <div className="cards">
        {data.map((cardItem) => {
          return (
            <Card
              review={cardItem.stats.reviewCount}
              rating={cardItem.stats.rating}
              title={cardItem.title}
              price={cardItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
