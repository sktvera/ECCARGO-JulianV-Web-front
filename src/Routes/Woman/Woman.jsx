import React, {useEffect , useState } from "react";
//COMPONENTS_____
import Womancategories from "../../Components/Womancategories/Womancategories";
import MensinteractiveMenu from "../../Components/MensinteractiveMenu/MensinteractiveMenu";
import WomansCard from "../../Components/WomansCard/WomansCard";
//ASSETS_____
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import "./Assets/styles.css";
//SERVICES_________
import {createQquotation} from "../../services/Quotation/Quotation";


//styles modal______
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

function Woman() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [service, setService] = useState("");
  const [mode, setMode] = useState("");
  const [cargoType, setCargoType] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dataCotizacion, setDataCotizacion] = useState();
  

  


  const handleSubmit = () => {
    if (service && mode && cargoType && origin && destination) {
      setDataCotizacion({ service, mode, cargoType, origin, destination });
      setOpenModal(false);
    }
  }


  const submitcreateQquotation = () =>{
    createQquotation(dataCotizacion)
    .then(response => {
      setService("")
      setMode("")
      setCargoType("")
      setOrigin("")
      setDestination("")
      setDataCotizacion()
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    if (dataCotizacion) {
      submitcreateQquotation();
    }
  }, [dataCotizacion]);





 

     

  const body = (
    <div className={classes.paper}>
      <h2>Agendar Cotizacion</h2>
      <label>Su cotizacion sera evidenciada en el panel de agendamiento</label>

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
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );




  return (
    <div>
      <Womancategories setOpenModal={setOpenModal} />

      <div className="bodyMens">
        <MensinteractiveMenu />
        <WomansCard dataCotizacion={dataCotizacion} />
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className={classes.modal}
      >
        {body}
      </Modal>
    </div>
  );
}

export default Woman;
