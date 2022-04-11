import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { FormLabel } from "@mui/material";

export default function DropzoneDialog(props) {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  const { open, onClose, array, agregarArray } = props;

  const handleClose = () => {
    onClose();
  };
  const readFileasText = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve("");
      } else {
        try {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsText(file);
        } catch (error) {
          resolve("");
        }
      }
    });
  };
  const readCSV = async (file) => {
    const respuesta = await readFileasText(file);
    const newArray = respuesta.split("\r\n");
    console.log(newArray);
    const nuevoArray = newArray
      .filter((item) => item.length > 0)
      .map((item) => item.split(","));
    agregarArray(...array, nuevoArray);
  };
  const handleAgregar = () => {
    if (files.length > 0) {
      readCSV(files[0].file);
      setTimeout(() => {
        agregarArray([]);
        updateFiles([]);
        onClose();
      }, 100);
    } else {
      alert("Debe agregar un archivo válido");
    }
  };
  const handleDeleteFile = (id) => {
    const newArrFiles = files.filter((file) => file.id !== id);
    setFiles(newArrFiles);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Agregar nuevo archivo"}
        </DialogTitle>
        <DialogContent>
          <FormLabel id="demo-radio-buttons-group-label">
            Seleccione un archivo para importar las habilidades. Recuerde
            separar habilidad y descripción por una coma y las filas, por saltos
            de linea. (Archivo de prueba incluido en el repositorio)
          </FormLabel>
          <Dropzone
            onChange={updateFiles}
            value={files}
            accept=".csv"
            maxFiles={"1"}
          >
            {files.map((file) => (
              <FileItem
                {...file}
                preview
                info
                resultOnTooltip
                localization="ES-es"
                onDelete={handleDeleteFile}
              />
            ))}
          </Dropzone>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAgregar} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
