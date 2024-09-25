import React from "react";
import "./Card.css";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../${props.item.coverImg}`}
        alt="Card1"
        className="card--image"
      />
      <div className="card--stats">
        <img src="../star.png" alt="star" className="card--star" />
        <span>{props.item.stats.rating} </span>
        <span className="gray"> ({props.item.stats.reviewCount})* </span>
        <span className="gray"> {props.item.country} </span>
      </div>
      <h2>{props.item.title} </h2>
      <p>
        {" "}
        <span className="bold">From ${props.item.price}</span> / person{" "}
      </p>
    </div>
  );
}
