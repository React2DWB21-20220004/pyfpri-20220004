import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = ({ children }) => {
  let navigate = useNavigate();
  React.useEffect(() => {
    let isLoged = localStorage.getItem("loged");
    if (isLoged === "true") {
      navigate("/perfil");
    }
  }, []);
  let isLoged = localStorage.getItem("loged");
  if (isLoged === "true") {
    return <React.Fragment></React.Fragment>;
  } else {
    return <div className="login">{children}</div>;
  }
};
export default Login;
