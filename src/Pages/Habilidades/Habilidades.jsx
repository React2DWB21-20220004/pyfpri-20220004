import * as React from "react";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import StorageIcon from "@mui/icons-material/Storage";
import Stack from "@mui/material/Stack";
import Tabla from "./TablaHabilidades";
import DropzoneDialog from "./DialogCargaMasiva";
import DialogAgregar from "./DialogAgregar";
import { useNavigate } from "react-router-dom";
const Habilidades = (props) => {
  const [arrayHabilidades, setArrayHabilidades] = React.useState([]);
  const [openAgregarDialog, setOpenAgregarDialog] = React.useState(false);
  const [openDropzone, setOpenDropzone] = React.useState(false);

  let navigate = useNavigate();
  React.useEffect(() => {
    let isLoged = localStorage.getItem("loged");

    if (!(isLoged === "true")) {
      navigate("/");
    }
  }, []);
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Habilidades Personales</h2>
        <div style={{ margin: "auto 0" }}>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                setOpenDropzone(true);
              }}
              variant="contained"
              startIcon={<StorageIcon />}
            >
              Carga Masiva
            </Button>
            <DropzoneDialog
              open={openDropzone}
              onClose={() => {
                setOpenDropzone(false);
              }}
              array={arrayHabilidades}
              agregarArray={(newArray) => {
                setArrayHabilidades(newArray);
              }}
            />
            <Button
              onClick={() => {
                setOpenAgregarDialog(true);
              }}
              variant="contained"
              startIcon={<PostAddIcon />}
            >
              Agregar
            </Button>
            <DialogAgregar
              open={openAgregarDialog}
              onClose={() => {
                setOpenAgregarDialog(false);
              }}
              array={arrayHabilidades}
              agregarArray={(newArray) => {
                setArrayHabilidades(newArray);
              }}
            />
          </Stack>
        </div>
      </div>
      <Tabla array={arrayHabilidades} />
    </section>
  );
};
export default Habilidades;
