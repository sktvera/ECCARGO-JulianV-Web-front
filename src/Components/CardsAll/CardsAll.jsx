import React, { useState } from "react";
//ASSETS_______
import { IconButton, Tooltip } from "@material-ui/core";
import Edit from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/DeleteOutline";
import Modal from "@material-ui/core/Modal";
import "./Assets/styles.css";

//COMPONENTES______
import UploadImageS3 from "../UploadImageS3/UploadImageS3";
import ModalQuatation from "../../Components/ModalQuatation/ModalQuatation";
import ModalDelete from "../../Components/ModalDelete/ModalDelete";


//SERVICES___
import { deletebyIdQuotation } from "../../services/Quotation/Quotation";
import { updateByIdQuotation } from "../../services/Quotation/Quotation";


function CardsAll({ items, setIsDelete,setIsUpdate }) {
  const dataitems = items ?? []; //DATOS DE LAS COTIZACIONES CREADAS____

  const [openModal, setOpenModal] = useState(false);
  //datos de las Cotizaciones creadas, para el formulario de editar cotizacion____
  const [service, setService] = useState(dataitems.service);
  const [mode, setMode] = useState(dataitems.mode);
  const [cargoType, setCargoType] = useState(dataitems.cargoType);
  const [origin, setOrigin] = useState(dataitems.origin);
  const [destination, setDestination] = useState(dataitems.destination);
  const [dataCotizacion, setDataCotizacion] = useState(); //valida y guarda los datos de la cotizacion creada, para actualizarla___
  const [open, setOpen] = useState(false); //habre y cierra la modal de eliminar cotizacion  keyId
  const [keyId, setKeyId] = useState(); //  keyId


  //envia el formulario de editar cotizacion__
  const handleSubmit = () => {
    if (service && mode && cargoType && origin && destination) {
      setDataCotizacion({ service, mode, cargoType, origin, destination });
      setOpenModal(false);

      if(dataCotizacion){
        updateByIdQuotation(keyId,dataCotizacion)
        .then((response) => {
          console.log(response)
          setIsUpdate(response)
          setDataCotizacion()
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }
  };

  console.log({dataCotizacion})

  //habre la modal de verificacion para eliminar la cotizacion
  const handleClickOpen = () => {
    setOpen(true);
  };
  //cierra la modal que verifica la eliminacion de la modal
  const handleClose = () => {
    setOpen(false);
  };

  //realiza la peticion al backend para eliminar la cotizacion
  const handleDelete = (id) => {
    deletebyIdQuotation(id)
      .then((response) => {
        setIsDelete(response.data);
        console.log("Elemento eliminado con éxito");
        handleClose();
      })
      .catch((error) => {
        console.error("Error al eliminar el elemento:", error);
      });
  };

  //habre la modal que edita la cotizacion
  const handleEdit = () => {
    setOpenModal(true);
  };

  return (
    <div>
      {/*  ESTRUCTURA CARD DE COTIZACIONES ___________ */}

      <div className="bodyCard">
  <div className="titlebodyCard">
    <div className="tittles">
      <p className="id">#{dataitems.id}</p>
      <p className="service">{dataitems.service}</p>
      <p className="mode">{dataitems.mode}</p>
      <p className="cargoType">{dataitems.cargoType}</p>
    </div>
    <div className="iconContainer">
      <Tooltip title="Editar">
        <IconButton className="editIcon" onClick={handleEdit}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Eliminar">
        <IconButton className="deleteIcon" onClick={handleClickOpen}>
          <Delete />
        </IconButton>
      </Tooltip>
    </div>
  </div>

  {/* ENVIAR IMAGENES AL BUCKET DE S3 AWS _______ */}
  <UploadImageS3 dataitems={dataitems} />
</div>

      {/* MODAL ELIMINAR COTIZAION ___________ */}

<ModalDelete
open={open}
descriptionModal={"¿Estás seguro de que quieres eliminar esta Cotizacion?"}
handleClose={handleClose}
handleDelete={handleDelete}
dataitems={dataitems.id}
/>


      {/* MODAL EDITAR COTIZACION __________ */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ModalQuatation
        setKeyId={setKeyId}
        keyId={dataitems}
          title={`Actuzalizar Cotizacion`}
          subtitle={`Su cotizacion sera actualizada y evidenciada en el panel de agendamiento`}
          labelButton={`Actualizar`}
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

export default CardsAll;
