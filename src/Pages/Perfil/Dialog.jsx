import * as React from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import WarningIcon from "@mui/icons-material/Warning";
import CheckIcon from "@mui/icons-material/Check";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dialogs = (props) => {
  const { abrir, message, onClose, tipoAlerta, onContinuar } = props;

  const Confirmar = () => {
    onClose();
  };

  const handleClose = () => {
    onClose(false);
  };
  const Continuar = () => {
    onContinuar();
  };
  return (
    <Dialog
      open={abrir}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div
        style={{
          margin: "5px 0 ",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tipoAlerta === "warning" && (
          <WarningIcon color="warning" style={{ fontSize: "55px" }} />
        )}
        {tipoAlerta === "exito" && (
          <CheckIcon color="success" style={{ fontSize: "55px" }} />
        )}
        <DialogContent style={{ alignItems: "center" }}>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
      </div>

      <DialogActions>
        {tipoAlerta === "warning" && (
          <Fragment>
            <Button onClick={handleClose}>CANCELAR</Button>
            <Button onClick={Continuar}>GUARDAR</Button>
          </Fragment>
        )}
        {tipoAlerta === "exito" && (
          <Fragment>
            <Button onClick={Confirmar}>ACEPTAR</Button>
          </Fragment>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default Dialogs;
