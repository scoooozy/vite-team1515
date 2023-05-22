import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div>
      {" "}
      <div
        className="robot-card"
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <div className="robot-card-content">
          <h2 className="robot-card-title">{props.title}</h2>
          <h4>{props.year}</h4>
          <p className="robot-card-body">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
