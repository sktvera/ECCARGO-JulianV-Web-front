import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Tooltip } from "@mui/material";
import { AddCircleOutline,  } from "@mui/icons-material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./Assets/styles.css";

function QuotationMenu({ setOpenModal }) {
  return (
   <div className="master-containerAppBar">
     <div className=" containerAppBar">
      <AppBar className="AppBar" position="static" sx={{ bgcolor: "#000000" }}>
      <Toolbar className="Toolbar">
        <IconButton color="inherit" onClick={() => setOpenModal(true)}>
          <Tooltip title="Añadir cotización">
            <AddCircleOutline />
          </Tooltip>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
         Tu Cotizador A Solo Un Click !
        </Typography>
        <IconButton color="inherit">
          <AssignmentIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    </div>
   </div>
  );
}

export default QuotationMenu;
