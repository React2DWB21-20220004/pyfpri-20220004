import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const DefaultPage = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> No hay nada que ver por aquí :)</h1>
      <Button onClick={handleClick} variant="contained">
        Volver a login
      </Button>
    </div>
  );
};
export default DefaultPage;
