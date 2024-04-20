import React,{useEffect,useState} from "react";

//COMPONENTES______
import CardsAll from "../CardsAll/CardsAll";

//ASSETS_____
import "./Assets/styles.css";
import Load from "./Assets/Img/Load.svg";

//SERVICES_____
import {getAllQuotation} from "../../services/Quotation/Quotation";

function QuotatioCard({dataCotizacion}) {

  const [allQuotation,setAllQuotation]=useState([])//GUarda todos los datos______
  const[isDelete,setIsDelete]=useState()//guarda el estado de la elimicacion exitosa____

//peticon backend carga todos los objetos____
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
  }, [dataCotizacion, isDelete]);//detecta cuando se crea o se elimina un producto y realiza un nuevo llamado al backend___


  return (
    <>
      {allQuotation.length > 0 ? (
            <div className="cardsGrid">
              {allQuotation.map((items) => {
                return <CardsAll 
                items={items}
                setIsDelete={setIsDelete}
                 />;
              })}
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

export default QuotatioCard;


