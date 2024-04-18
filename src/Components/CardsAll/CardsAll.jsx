import React, { useState } from "react";
//ASSETS_______
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import "./Assets/styles.css";
//SERVICES___
import {deletebyIdQuotation} from"../../services/Quotation/Quotation";


function CardsAll({ items,setIsDelete }) {
  const dataitems = items ?? [];

  console.log(dataitems)
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

        setIsDelete(response.data)
        console.log('Elemento eliminado con éxito');
        handleClose();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };


  const handleEdit = (item) => {
    
    /* setOpenModal(true); */
  };
  

  return (
    <div className="bodyCard">
      <div className="tittles">
        <p>#{dataitems.id}</p>
        <p>{dataitems.service}</p>
        <p>{dataitems.mode}</p>
        <p>{dataitems.cargoType}</p>
      </div>
      <div className="iconContainer">
      <i className="editIcon" onClick={() => handleEdit(dataitems)}>✏️</i>
        <i className="deleteIcon" onClick={handleClickOpen}>❌</i>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmación de eliminación"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estás seguro de que quieres eliminar esta Cotizacion?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={() => handleDelete(dataitems.id)} color="primary" >
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CardsAll;
