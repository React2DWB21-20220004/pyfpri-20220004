import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import logo from "../../img/CVlogo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import avatar from "../../img/avatar_tony.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DialogCerrar from "./DialogCerrar";

const drawerWidth = 240;

const BarraNavegacion = (props) => {
  let navigate = useNavigate();
  const name = "Tony Stark";
  const { children } = props;
  const [open, setOpen] = useState(false);
  const handlePerfil = () => {
    navigate("/perfil");
  };
  const handleHabilidades = () => {
    navigate("/habilidades");
  };
  const handleExperiencia = () => {
    navigate("/experiencia");
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          // style={{backgroundColor:"#004d25"}}
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" noWrap component="div">
              My CV Aplication
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="avatar" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={name} />

                <Tooltip title="Cerrar Sesión">
                  <IconButton
                    onClick={() => {
                      setOpen(true);
                      /* localStorage.setItem("loged", "");
                      navigate("/"); */
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            </List>
          </Toolbar>
          <DialogCerrar open={open} handleClose={() => setOpen(false)} />
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "8vw" }} src={logo} alt="logo" />
          </div>

          <Divider />
          <List>
            <ListItem button key={0} onClick={handlePerfil}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
            </ListItem>
            <Divider variant="middle" />
            <ListItem button key={0}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Experiencia"}
                onClick={handleExperiencia}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem button key={0}>
              <ListItemIcon>
                <ContentPasteSearchIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Habilidades"}
                onClick={handleHabilidades}
              />
            </ListItem>
          </List>
        </Drawer>
        <Box
          /* component="main" */
          sx={{ flexGrow: 1, bgcolor: "#F8F9FA", p: 3, borderRadius: "10px" }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default BarraNavegacion;
