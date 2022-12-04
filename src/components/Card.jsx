import React from "react";
function Card({ imgsrc, review, rating, title, price }) {
  return (
    <div className="card">
      <img src="/public/images/image 12.png" alt="" className="card-img" />
      <div className="rating">
        <p>
          <span id="review">⭐{review}</span>
          <span id="rating">({rating})</span> - USA
        </p>
      </div>
      <p id="title">{title}</p>
      <p className="pricing">
        <span id="price">From {price}</span> / person
      </p>
    </div>
  );
}

export default Card;
