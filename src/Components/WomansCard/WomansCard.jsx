import React from "react";

import CardsAll from "../../Components/CardsAll/CardsAll";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

import "./Assets/styles.css";

import Load from "./Assets/Img/Load.svg";

function WomansCard({ dataCotizacion }) {
  console.log({ dataCotizacion });

  return (
    <>
      {dataCotizacion.length > 0 ? (
        <div>
          <div>
            <div className="ordered">
              <div>ordenar por:</div>
              <ViewCarouselIcon />
            </div>

            <div className="cardsGrid">
              {dataCotizacion.map((items) => {
                return <CardsAll items={items} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="loadCot">
         <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
         <img src={Load} alt="" />
          <label htmlFor="">Parece que no tienes cotizaciones!</label>
         </div>
        </div>
      )}
    </>
  );
}

export default WomansCard;
