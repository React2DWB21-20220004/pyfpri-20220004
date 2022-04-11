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
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const DialogAgregar = (props) => {
  const { open, onClose, array, agregarArray } = props;

  const handleSave = () => {
    if (habilidad && descripcion && valueStart && valueFin) {
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
  const [valueStart, setValueStart] = useState(null);
  const [valueFin, setValueFin] = useState(null);
  const [openWarningDialog, setOpenW] = useState(false);
  const [openConfirmationDialog, setOpenC] = useState(false);

  const [habilidad, setHabilidad] = useState();
  const [descripcion, setDescripcion] = useState();
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
              label="Experiencia"
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
              required
              id="outlined-required"
              label="Lugar"
              onChange={(e) => {
                if (
                  e.target.value.lastIndexOf(" ") !==
                  e.target.value.length - 1
                ) {
                  setDescripcion(e.target.value);
                }
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha de Inicio"
                openTo="year"
                views={["year", "month", "day"]}
                value={valueStart}
                onChange={(newValue) => {
                  setValueStart(newValue.toLocaleDateString());
                }}
                renderInput={(params) => <TextField required {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                required
                label="Fecha de Fin"
                openTo="year"
                views={["year", "month", "day"]}
                value={valueFin}
                onChange={(newValue) => {
                  setValueFin(newValue.toLocaleDateString());
                }}
                renderInput={(params) => <TextField required {...params} />}
              />
            </LocalizationProvider>
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
          valueStart={valueStart}
          valueFin={valueFin}
          setHabilidad={setHabilidad}
          setDescripcion={setDescripcion}
          setValueStart={setValueStart}
          setValueFin={setValueFin}
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
