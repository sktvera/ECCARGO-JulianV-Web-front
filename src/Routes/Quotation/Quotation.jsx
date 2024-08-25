import React, { useEffect, useState } from "react";
//COMPONENTS_____
import QuotationMenu from "../../Components/QuotationMenu/QuotationMenu";

import QuotatioCard from "../../Components/QuotatioCard/QuotatioCard";
//ASSETS_____
import Modal from "@material-ui/core/Modal";
import "./Assets/styles.css";

//SERVICES_________
import { createQquotation } from "../../services/Quotation/Quotation";
import ModalQuatation from'../../Components/ModalQuatation/ModalQuatation'

function Quotation() {

  const [openModal, setOpenModal] = useState(false);//abrir cerrar modal ______
  const [service, setService] = useState("");//save service___
  const [mode, setMode] = useState("");//save mode___
  const [cargoType, setCargoType] = useState("");//save cargoType____ 
  const [origin, setOrigin] = useState("");//save origin____ 
  const [destination, setDestination] = useState("");//save destination____ 

  const [dataCotizacion, setDataCotizacion] = useState(); //guarda la data de cotización_____

  //guardar formulario_____
  const handleSubmit = () => {
    if (service && mode && cargoType && origin && destination) {
      setDataCotizacion({ service, mode, cargoType, origin, destination });
      
      setOpenModal(false);
    }else{
      alert("llena todos los campos del formulario")
    }
  };

  //envia el objeto al backend ______
  useEffect(() => {
    if (dataCotizacion) {
      createQquotation(dataCotizacion)
        .then((response) => {
          setService("");
          setMode("");
          setCargoType("");
          setOrigin("");
          setDestination("");
          setDataCotizacion();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dataCotizacion]);

  //modal
 

  return (
    <div>
      <QuotationMenu setOpenModal={setOpenModal} />
      {/* COTIZACIONES CREADAS____________________ */}
      <div className="bodyMens">
      
        <QuotatioCard dataCotizacion={dataCotizacion} />
      </div>

      {/*  MODAL PARA CREAR COTIZACIONES _______________________ */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
      >
        {/* MODAL CREAR COTIZACION COMPONENTE REUTILIZABLE__________________ */}
        <ModalQuatation
        title={`Agendar Cotizacion`}
        subtitle={`Su cotizacion sera evidenciada en el panel de agendamiento`}
        labelButton={`Enviar`}
        service={service}
        mode={mode}
        cargoType={cargoType}
        destination={destination}
        origin={origin}
        setService={setService}
        setMode={setMode}
        setCargoType={setCargoType}
        setOrigin={setOrigin}
        setDestination={setDestination}
        handleSubmit={handleSubmit}
        setOpenModal={setOpenModal}
        />

    
      </Modal>
    </div>
  );
}

export default Quotation;
