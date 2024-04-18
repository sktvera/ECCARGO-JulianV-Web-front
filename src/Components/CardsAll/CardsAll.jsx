import React, { useState } from "react";
//ASSETS_______
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "./Assets/styles.css";
//SERVICES___
import {deletebyIdQuotation} from"../../services/Quotation/Quotation";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));





function CardsAll({ items,setIsDelete }) {

  const dataitems = items ?? [];

  const classes = useStyles();

 


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

        setIsDelete(response.data)
        console.log('Elemento eliminado con éxito');
        handleClose();
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };


  const handleEdit = (item) => {
    
    setOpenModal(true);
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

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className={classes.modal}
      >
       <div className={classes.paper}>
      <h2>Actualizar Cotizacion #{dataitems.id}</h2>
      <label>Su cotizacion sera actualizada y evidenciada en el panel de agendamiento</label>

      <div className="contentFormCot">
        <FormControl className={classes.formControl}>
          <InputLabel>Servicio</InputLabel>
          <Select value={service} onChange={(e) => setService(e.target.value)}>
            <MenuItem value={"maritimo"}>Marítimo</MenuItem>
            <MenuItem value={"terrestre"}>Terrestre</MenuItem>
            <MenuItem value={"aereo"}>Aéreo</MenuItem>
            <MenuItem value={"aduana"}>Aduana</MenuItem>
            <MenuItem value={"almacenamiento"}>Almacenamiento</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Modalidad</InputLabel>
          <Select value={mode} onChange={(e) => setMode(e.target.value)}>
            <MenuItem value={"importacion"}>Importación</MenuItem>
            <MenuItem value={"exportacion"}>Exportación</MenuItem>
            <MenuItem value={"nacional"}>Nacional</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Tipo de carga</InputLabel>
          <Select
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value)}
          >
            <MenuItem value={"general"}>General</MenuItem>
            <MenuItem value={"peligrosa"}>Peligrosa</MenuItem>
            <MenuItem value={"refrigerada"}>Refrigerada</MenuItem>
            <MenuItem value={"granel"}>Granel</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Origen"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <TextField
          label="Destino"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <div className="buttonCot">
          {" "}
          <button onClick={() => setOpenModal(false)}>Cancelar</button>
          <button onClick={handleSubmit}>Editar</button>
        </div>
      </div>
    </div>
      </Modal>
    </div>
  );
}

export default CardsAll;



