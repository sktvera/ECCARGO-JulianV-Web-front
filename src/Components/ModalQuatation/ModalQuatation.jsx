import React from 'react'

import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
  } from "@material-ui/core";

  import { makeStyles } from "@material-ui/core/styles";

  //styles modal______
const useStyles = makeStyles((theme) => ({
  
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      
      boxShadow:"10px 10px 29px -13px #000000bf",
      borderRadius: "8px",

      padding: theme.spacing(2, 4, 3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  
const ModalQuatation = (
    {setKeyId,keyId,
    service,mode,cargoType,destination,origin,//leer estados
    setService, setMode,setCargoType,setOrigin,setDestination, setOpenModal, //guardar estados
    handleSubmit, //funcion de enviarformulario
    title, subtitle, labelButton// textos__
    }) => {

const valuekeyId = keyId ?? null;
        
       
if(valuekeyId){
  setKeyId(valuekeyId.id)
}


    const classes = useStyles();//estilos modal______
  return (
    
        <div className={classes.paper}>
          <h2>{title}</h2>
          <label>{subtitle}</label>
    
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
              <Button style={{border:'1px solid #00000033', borderRadius:'8px'}} onClick={() => setOpenModal(false)}>Cancelar</Button>
              <Button style={{backgroundColor:"#004274", color:"white"}}  onClick={handleSubmit}>{labelButton}</Button>
            </div>
          </div>
        </div>
      
  )
}

export default ModalQuatation
