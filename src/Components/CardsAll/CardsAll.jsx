import React, { useState } from "react";
//ASSETS_______
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { IconButton, Tooltip } from "@material-ui/core";

import Edit from '@mui/icons-material/BorderColor';
import Delete from '@mui/icons-material/DeleteOutline';

import Modal from "@material-ui/core/Modal";

import UploadImageS3 from '../UploadImageS3/UploadImageS3'

import "./Assets/styles.css";
//SERVICES___
import { deletebyIdQuotation } from "../../services/Quotation/Quotation";


import ModalQuatation from '../../Components/ModalQuatation/ModalQuatation'

function CardsAll({ items, setIsDelete }) {
  const dataitems = items ?? [];



  const [openModal, setOpenModal] = useState(false);
  const [service, setService] = useState(dataitems.service);
  const [mode, setMode] = useState(dataitems.mode);
  const [cargoType, setCargoType] = useState(dataitems.cargoType);
  const [origin, setOrigin] = useState(dataitems.origin);
  const [destination, setDestination] = useState(dataitems.destination);
  const [dataCotizacion, setDataCotizacion] = useState();

  const handleSubmit = () => {
    if (service && mode && cargoType && origin && destination) {
      setDataCotizacion({ service, mode, cargoType, origin, destination });
      setOpenModal(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleEdit = (item) => {
    setOpenModal(true);
  };

  return (
    <div className="bodyCard">
      <div className="titlebodyCard">
      <div className="tittles">
        <p>#{dataitems.id}</p>
        <p>{dataitems.service}</p>
        <p>{dataitems.mode}</p>
        <p>{dataitems.cargoType}</p>
      </div>
      <div className="iconContainer">
        <Tooltip title="Editar">
          <IconButton style={{color:"black"}} onClick={handleEdit}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton style={{color:"black"}} onClick={handleClickOpen}>
            <Delete />
          </IconButton>
        </Tooltip>
      </div>

      </div>

      <UploadImageS3
      dataitems={dataitems}
      />
 


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmación de eliminación"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estás seguro de que quieres eliminar esta Cotizacion?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={() => handleDelete(dataitems.id)} color="primary">
            Sí
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
      >
       <ModalQuatation
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
