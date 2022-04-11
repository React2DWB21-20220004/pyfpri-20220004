import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import WarningIcon from "@mui/icons-material/Warning";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogLogin(props) {
  const { open, handleClose, index, filasH, setfilasH } = props;
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
        <WarningIcon color="warning" style={{ fontSize: "55px" }} />
        <DialogContent style={{ alignItems: "center" }}>
          <DialogContentText id="alert-dialog-description">
            {"¿Seguro que desea eliminar esta habilidad?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              let filtrada = filasH.filter(
                (item) => filasH.indexOf(item) !== index
              );
              setfilasH(filtrada);
              handleClose();
            }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
