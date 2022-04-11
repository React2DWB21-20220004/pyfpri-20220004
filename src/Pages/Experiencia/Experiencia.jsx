import * as React from "react";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import StorageIcon from "@mui/icons-material/Storage";
import Stack from "@mui/material/Stack";
import Tabla from "./TablaExperiencia";
import DropzoneDialog from "./DialogCargaMasiva";
import DialogAgregar from "./DialogAgregar";
import { useNavigate } from "react-router-dom";
const Experiencia = (props) => {
  const [arrayExperiencia, setarrayExperiencia] = React.useState([]);
  const [openAgregarDialogE, setopenAgregarDialogE] = React.useState(false);
  const [openDropzoneE, setopenDropzoneE] = React.useState(false);
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
        <h2>Experiencia Laboral</h2>
        <div style={{ margin: "auto 0" }}>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                setopenDropzoneE(true);
              }}
              variant="contained"
              startIcon={<StorageIcon />}
            >
              Carga Masiva
            </Button>
            <DropzoneDialog
              open={openDropzoneE}
              onClose={() => {
                setopenDropzoneE(false);
              }}
              array={arrayExperiencia}
              agregarArray={(newArray) => {
                setarrayExperiencia(newArray);
              }}
            />
            <Button
              onClick={() => {
                setopenAgregarDialogE(true);
              }}
              variant="contained"
              startIcon={<PostAddIcon />}
            >
              Agregar
            </Button>
            <DialogAgregar
              open={openAgregarDialogE}
              onClose={() => {
                setopenAgregarDialogE(false);
              }}
              array={arrayExperiencia}
              agregarArray={(newArray) => {
                setarrayExperiencia(newArray);
              }}
            />
          </Stack>
        </div>
      </div>
      <Tabla array={arrayExperiencia} />
    </section>
  );
};
export default Experiencia;
