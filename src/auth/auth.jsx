import axios from "axios";

export const iniciarSesionBackend = async (correo, contrasenia) => {
  const body = {
    correo: correo,
    contrasenia: contrasenia,
  };
  try {
    const response = await axios.post(
      "http://localhost:2800/usuario/auth",
      body
    );
    //console.log("Login=>", response);
    if (response && response.data) {
      return response.data;
    } else {
      return { ok: false, payload: {}, message: "Error inesperado" };
    }
  } catch (error) {
    console.error("login error: ", error);
    return { ok: false, payload: {}, message: "Error en servidor" };
  }
};
