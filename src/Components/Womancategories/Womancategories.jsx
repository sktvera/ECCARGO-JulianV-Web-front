import React from "react";
import basicos from "./Assets/Img/basicos.jpg";
import cargo from "./Assets/Img/cargo.jpg";
import denim from "./Assets/Img/denim.jpg";
import gorras from "./Assets/Img/gorras.jpg";
import graficos from "./Assets/Img/graficos.jpg";
import oversizeh from "./Assets/Img/oversizeh.jpg";

import "./Assets/styles.css";

function Womancategories({setOpenModal}) {
  return (
    <div>
      <div className="Menscategories">
        <div className="contained-Menscategories">
          <div onClick={()=>setOpenModal(true)} className="img-Menscategories">
            <div
              style={{
                backgroundColor: " rgba(146, 146, 146, 0.283)",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                position: "absolute",
                top: 0,
              }}
            />
            <img style={{ height: "110px" }} src={oversizeh} alt="oversizeh" />
            <div className="textInfo">
              <p>Añadir cotizacion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line-Menscategories" />
    </div>
  );
}

export default Womancategories;
