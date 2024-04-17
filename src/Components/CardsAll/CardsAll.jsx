import React from "react";
import "./Assets/styles.css";

function CardsAll({ items }) {
  const dataitems = items ?? [];

  console.log(dataitems);

  return (
    <div className="bodyCard">
      <div className="tittles">
        <p>{dataitems.service}</p>
        <p>{dataitems.mode}</p>
        <p>{dataitems.cargoType}</p>
        <div className="iconContainer">
          <i className="editIcon" style={{ display: 'none' }}>✏️</i>
          <i className="deleteIcon" style={{ display: 'none' }}>❌</i>
        </div>
      </div>
    </div>
  );
}

export default CardsAll;
