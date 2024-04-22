import React from "react";
//ASSETS______
import Diagram from "./Assets/Img/Diagram.png";
import Front from "./Assets/Img/Front.png";
import backend from "./Assets/Img/backend.png";

function MensCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ width: "380px" }}>Doumentacion aplicativo</h1>
      <img src={Diagram} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <div>
          <h2>Arquitectura Front</h2>
          <img src={Front} alt="" />
        </div>
        <div>
          <h2>Arquitectura Backend</h2>
          <img src={backend} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MensCard;




