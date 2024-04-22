import React from "react";
//COMPONENTES _______
import Menscategories from "../../Components/Menscategories/Menscategories";
import MensCard from "../../Components/MensCard/MensCard";
//ASSETS_____
import "./Assets/styles.css";

function Mens() {
  return (
    <div>
      <Menscategories />
      <div className="bodyMens">
        <MensCard />
      </div>
    </div>
  );
}

export default Mens;
