import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import WarningIcon from "@mui/icons-material/Warning";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogLogin({ open, handleClose }) {
  let navigate = useNavigate();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
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
        <DialogTitle>Cerrar Sesión</DialogTitle>
        <WarningIcon color="warning" style={{ fontSize: "55px" }} />
        <DialogContent style={{ alignItems: "center" }}>
          <DialogContentText id="alert-dialog-description">
            {"¿Está seguro de cerrar sesión?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>

          <Button
            onClick={() => {
              localStorage.setItem("loged", "");
              handleClose();
              navigate("/");
            }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
