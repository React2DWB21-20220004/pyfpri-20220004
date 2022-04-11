import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import Dialogs from "./Dialogs";
import { useState } from "react";

const DialogAgregar = (props) => {
  const { open, onClose, array, agregarArray } = props;

  const handleSave = () => {
    console.log(habilidad);
    console.log(descripcion);

    if (habilidad && descripcion) {
      /* createData(habilidad,descripcion); */
      setOpenW(true);
    } else {
      alert("Complete todos los recuadros");
    }
  };
  const handleContinuar = () => {
    setOpenW(false);
    setOpenC(true);
  };
  const [openWarningDialog, setOpenW] = useState(false);
  const [openConfirmationDialog, setOpenC] = useState(false);

  const [habilidad, setHabilidad] = React.useState();
  const [descripcion, setDescripcion] = React.useState();
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Agregar nueva habilidad"}
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Habilidad"
              onChange={(e) => {
                if (
                  e.target.value.lastIndexOf(" ") !==
                  e.target.value.length - 1
                ) {
                  setHabilidad(e.target.value);
                }
              }}
            />
            <TextField
              minRows={5}
              multiline
              required
              id="outlined-required"
              label="Descripción"
              onChange={(e) => {
                if (
                  e.target.value.lastIndexOf(" ") !==
                  e.target.value.length - 1
                ) {
                  setDescripcion(e.target.value);
                }
              }}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave} autoFocus>
          Aceptar
        </Button>
        <Dialogs
          abrir={openWarningDialog}
          onClose={() => {
            setOpenW(false);
          }}
          message={"¿Desea guardar los cambios?"}
          tipoAlerta="warning"
          onContinuar={handleContinuar}
          agregarArray={agregarArray}
          habilidad={habilidad}
          descripcion={descripcion}
          setHabilidad={setHabilidad}
          setDescripcion={setDescripcion}
        />
        <Dialogs
          abrir={openConfirmationDialog}
          onClose={() => {
            setOpenC(false);
          }}
          message={"¡Cambios guardados exitosamente!"}
          tipoAlerta="exito"
          onCloseA={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};
export default DialogAgregar;
