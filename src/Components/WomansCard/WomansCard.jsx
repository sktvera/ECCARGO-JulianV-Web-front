import React,{useEffect,useState} from "react";
//COMPONENTES______
import CardsAll from "../../Components/CardsAll/CardsAll";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
//ASSETS_____
import "./Assets/styles.css";
import Load from "./Assets/Img/Load.svg";
//SERVICES_____
import {getAllQuotation} from "../../services/Quotation/Quotation";

function WomansCard({dataCotizacion}) {


  const [allQuotation,setAllQuotation]=useState([])
  const[isDelete,setIsDelete]=useState()

  useEffect(() => {
    const fetchAllQuotations = async () => {
      try {
        const response = await getAllQuotation();
        setAllQuotation(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllQuotations();
  }, [dataCotizacion, isDelete]);



  

  return (
    <>
      {allQuotation.length > 0 ? (
        <div>
          <div>
            <div className="ordered">
              <div>ordenar por:</div>
              <ViewCarouselIcon />
            </div>

            <div className="cardsGrid">
              {allQuotation.map((items) => {
                return <CardsAll 
                items={items}
                setIsDelete={setIsDelete}
                 />;
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


