import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";


const ModalDelete = ({open,handleClose, handleDelete, dataitems, descriptionModal}) => {

   
  return (
   <>
    {/* MODAL ELIMINAR COTIZAION ___________IMG S3 */}
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
            {descriptionModal}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={() => handleDelete(dataitems)} color="primary">
            Sí
          </Button>
        </DialogActions>
      </Dialog>
   </>

  )
}

export default ModalDelete