import { Paper } from "@mui/material";
import * as React from "react";
import { Fragment, useState, useEffect } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import foto from "../../img/foto.jpeg";
import Typography from "@mui/material/Typography";
import ModoEdicion from "./ModoEdición.jsx";
import Dialogs from "./Dialog";
import { useNavigate } from "react-router-dom";
const Perfil = (props) => {
  let navigate = useNavigate();
  let isLoged = localStorage.getItem("loged");

  const handleSave = () => {
    setOpenW(true);
  };
  const handleContinuar = () => {
    setOpenW(false);
    setOpenC(true);
    setModoEdicion(false);
  };
  const [openWarningDialog, setOpenW] = useState(false);
  const [openConfirmationDialog, setOpenC] = useState(false);

  const [modoEdicion, setModoEdicion] = useState(false);
  const handleEdicion = () => {
    setModoEdicion(true);
  };

  const [nombres, setNombres] = useState("Anthony Edward");
  const [apellidos, setApellidos] = useState("STARK");
  const [correo, setCorreo] = useState("tony.stark@marve.inc");
  const [ocupacion, setOcupacion] = useState(
    "Ingeniero Informático en Stark Industries Inc."
  );
  const [id, setId] = useState("002576007");
  const [telefono, setTelefono] = useState("999 555 007");
  const [fechaNacimiento, setFechaNacimiento] = useState("03/22/1970");
  const [direccion, setDireccion] = useState("10880 Malibu Point");
  const [acercaDeMi, setAcercaDeMi] = useState(
    `Genio, millonario, filántropo, playboy. Ingeniero Informático, mecánico y electrónico con intereses en programación y desarrollo web. Científico, inventor, amante de la tecnología. Filántropo apto a la ayuda comunitaria.`
  );
  const usuario = {
    nombres: nombres,
    apellidos: apellidos,
    correo: correo,
    ocupacion: ocupacion,
    id: id,
    telefono: telefono,
    fechaNacimiento: fechaNacimiento,
    direccion: direccion,
    acercaDeMi: acercaDeMi,
  };
  useEffect(() => {
    let nombre = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");
    let correo = localStorage.getItem("correo");
    let ocupacion = localStorage.getItem("ocupacion");
    let id = localStorage.getItem("id");
    let telefono = localStorage.getItem("telefono");
    let fecha = localStorage.getItem("fecha");
    let direccion = localStorage.getItem("direccion");
    let acerca = localStorage.getItem("acerca");
    if (!(isLoged === "true")) {
      navigate("/");
    } else {
      if (nombre != null) {
        setNombres(JSON.parse(nombre));
      } else {
        setNombres(usuario.nombres);
      }
      if (apellido != null) {
        setApellidos(JSON.parse(apellido));
      } else {
        setApellidos(usuario.apellidos);
      }
      if (correo != null) {
        setCorreo(JSON.parse(correo));
      } else {
        setCorreo(usuario.correo);
      }
      if (ocupacion != null) {
        setOcupacion(JSON.parse(ocupacion));
      } else {
        setOcupacion(usuario.ocupacion);
      }
      if (id != null) {
        setId(JSON.parse(id));
      } else {
        setId(usuario.id);
      }
      if (telefono != null) {
        setTelefono(JSON.parse(telefono));
      } else {
        setTelefono(usuario.telefono);
      }
      if (fecha != null) {
        setFechaNacimiento(JSON.parse(fecha));
      } else {
        setFechaNacimiento(usuario.fechaNacimiento);
      }
      if (direccion != null) {
        setDireccion(JSON.parse(direccion));
      } else {
        setDireccion(usuario.direccion);
      }
      if (acerca != null) {
        setAcercaDeMi(JSON.parse(acerca));
      } else {
        setAcercaDeMi(usuario.acercaDeMi);
      }
    }
  }, []);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("nombre", JSON.stringify(nombres));
    }
  }, [nombres]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("apellido", JSON.stringify(apellidos));
    }
  }, [apellidos]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("correo", JSON.stringify(correo));
    }
  }, [correo]);

  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("ocupacion", JSON.stringify(ocupacion));
    }
  }, [ocupacion]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("id", JSON.stringify(id));
    }
  }, [id]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("telefono", JSON.stringify(telefono));
    }
  }, [telefono]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("fecha", JSON.stringify(fechaNacimiento));
    }
  }, [fechaNacimiento]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("direccion", JSON.stringify(direccion));
    }
  }, [direccion]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("fecha", JSON.stringify(fechaNacimiento));
    }
  }, [fechaNacimiento]);
  useEffect(() => {
    if (isLoged === "true") {
      localStorage.setItem("acerca", JSON.stringify(acercaDeMi));
    }
  }, [acercaDeMi]);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: "0" }}> Perfil</h2>{" "}
        <div style={{ display: "inline", justifyContent: "start" }}>
          {" "}
          {modoEdicion ? (
            <Fragment>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                GUARDAR
              </Button>
              <Dialogs
                abrir={openWarningDialog}
                onClose={() => {
                  setOpenW(false);
                }}
                message={"¿Desea guardar los cambios?"}
                tipoAlerta="warning"
                onContinuar={handleContinuar}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={handleEdicion}
              >
                EDITAR
              </Button>
              <Dialogs
                abrir={openConfirmationDialog}
                onClose={() => {
                  setOpenC(false);
                }}
                message={"¡Cambios guardados exitosamente!"}
                tipoAlerta="exito"
              />
            </Fragment>
          )}
        </div>
      </div>
      <div style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        {modoEdicion ? (
          <ModoEdicion
            datos={usuario}
            states={{
              nombres: setNombres,
              apellidos: setApellidos,
              correo: setCorreo,
              ocupacion: setOcupacion,
              id: setId,
              telefono: setTelefono,
              fechaNacimiento: setFechaNacimiento,
              direccion: setDireccion,
              acercaDeMi: setAcercaDeMi,
            }}
          />
        ) : (
          <Paper
            style={{
              margin: "0 20px",
              padding: " 10px",
              borderRadius: "10px",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" gutterBottom component="div">
              <b> {apellidos}</b>, {nombres}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {correo}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <b> Ocupación:</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {ocupacion}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <b> N° de Identificación personal:</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {id}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <b> Teléfono/ Celular:</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {telefono}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <b> Fecha de Nacimiento:</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {fechaNacimiento}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <b> Dirección:</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              {direccion}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <b> Acerca de mi:</b>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <p style={{ textAlign: "start", margin: 0 }}> {acercaDeMi}</p>
            </Typography>
          </Paper>
        )}
        <Paper
          style={{
            padding: "40px 0 ",
            borderRadius: "10px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              margin: "auto",
              height: "400px",
              width: "300px",
              border: "5px solid black",
            }}
          >
            <img
              src={foto}
              alt="foto"
              style={{
                height: "100%",
                width: "100%",

                objectFit: "cover",
              }}
            />
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};
export default Perfil;
