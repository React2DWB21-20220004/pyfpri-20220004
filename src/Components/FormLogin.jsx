import * as React from "react";
import { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { iniciarSesionBackend } from "../auth/auth";
import DialogLogin from "../Pages/login/DialogLogin";

const Form = (props) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState();
  const marginBottom = {
    marginBottom: "40px",
  };

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const handleContraseña = (e) => {
    setPassword(e.target.value);
  };
  const handleCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const handleIngresar = async () => {
    const res = await iniciarSesionBackend(correo, password);
    console.log(res);
    /* alert("Datos ingresados, revise la consola");
      console.log("Correo: " + correo + "\nContraseña: " + password); */
    if (res.ok) {
      localStorage.setItem("loged", "true");

      navigate("/perfil");

      localStorage.setItem("perfil", JSON.stringify(res.payload));
    } else {
      setOpen(true);
      setMensaje(res.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px 50px",
          /*  minHeight: "450px", */
          width: "250px",
          maxWidth: "270px",
          borderRadius: "15px",
          marginLeft: "60px",
        }}
      >
        <h2 style={marginBottom}>{"Bienvenido(a)"}</h2>
        <TextField
          style={marginBottom}
          required
          id="outlined-required"
          label="Correo"
          onChange={handleCorreo}
        />
        <TextField
          required
          id="outlined-required"
          label="Contraseña"
          type="password"
          onChange={handleContraseña}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          <span
            onClick={() => {
              alert("Sus credenciales son:\n tony.stark@marvel.inc\n 1234");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            Olvidé mi contraseña
          </span>
        </div>

        <Button
          onClick={handleIngresar}
          variant="contained"
          style={{ margin: "0 auto 40px auto" }}
        >
          Ingresar
        </Button>
        <DialogLogin
          open={open}
          handleClose={() => setOpen(false)}
          mensaje={mensaje}
        />
      </Paper>
    </div>
  );
};
export default Form;
