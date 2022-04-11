import * as React from "react";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";

const ModoEdición = (props) => {
  const { datos, states } = props;
  const [value, setValue] = React.useState(datos.fechaNacimiento);

  const handleNombre = (e) => {
    states.nombres(e.target.value);
  };
  const handleApellido = (e) => {
    states.apellidos(e.target.value);
  };
  const handleCorreo = (e) => {
    states.correo(e.target.value);
  };

  const handleOcupacion = (e) => {
    states.ocupacion(e.target.value);
  };
  const handleId = (e) => {
    states.id(e.target.value);
  };
  const handleTelefono = (e) => {
    states.telefono(e.target.value);
  };
  const handleDireccion = (e) => {
    states.direccion(e.target.value);
  };

  const handleAcercaDeMi = (e) => {
    states.acercaDeMi(e.target.value);
  };
  return (
    <Paper
      style={{
        margin: "0 20px",
        padding: " 15px",
        borderRadius: "10px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        autoComplete="off"
        noValidate
      >
        <TextField
          color="secondary"
          size="small"
          fullWidth
          required
          id="outlined-required"
          label="Nombres"
          defaultValue={datos.nombres}
          onChange={handleNombre}
        />
        <TextField
          color="secondary"
          size="small"
          fullWidth
          required
          id="outlined-required"
          label="Apellidos"
          defaultValue={datos.apellidos}
          onChange={handleApellido}
        />
        <TextField
          color="secondary"
          size="small"
          fullWidth
          required
          id="outlined-required"
          label="Correo"
          defaultValue={datos.correo}
          onChange={handleCorreo}
        />
        <TextField
          color="secondary"
          size="small"
          fullWidth
          required
          id="outlined-required"
          label="Ocupación"
          defaultValue={datos.ocupacion}
          onChange={handleOcupacion}
        />
        <TextField
          fullWidth
          color="secondary"
          size="small"
          required
          id="outlined-required"
          label="N° de Identificación"
          defaultValue={datos.id}
          onChange={handleId}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            style={{ paddingRight: "5px" }}
            color="secondary"
            required
            id="outlined-required"
            label="Teléfono/ Celular"
            defaultValue={datos.telefono}
            onChange={handleTelefono}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              color="secondary"
              renderInput={(props) => (
                <TextField color="secondary" required {...props} />
              )}
              label="Fecha de Nacimiento"
              value={value}
              onChange={(value) => {
                setValue(value);
                states.fechaNacimiento(value.toLocaleDateString());
              }}
            />
          </LocalizationProvider>
        </div>

        <TextField
          color="secondary"
          size="small"
          fullWidth
          required
          id="outlined-required"
          label="Dirección"
          defaultValue={datos.direccion}
          onChange={handleDireccion}
        />
        <TextField
          multiline
          minRows={3}
          color="secondary"
          size="small"
          fullWidth
          required
          id="outlined-required"
          label="Acerca de mi"
          defaultValue={datos.acercaDeMi}
          onChange={handleAcercaDeMi}
        />
      </Box>
    </Paper>
  );
};
export default ModoEdición;
