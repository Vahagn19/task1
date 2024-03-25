import { AppBar, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './sidebar.module.css'

function Sidebar() {
  return (
    <AppBar
      sx={{
        width: "64px",
        height: "900px",
        position: "relative",
      }}
    >
      <IconButton
        size="medium"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 0 }}
      >
        <MenuIcon />
      </IconButton>

      <List>
        <ListItem sx={{ justifyContent: "center" }} >
          <Link to="/profile" >
            <PermContactCalendarIcon sx={{ color: "#ffffff" }} />
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/dashboard">
            <DashboardIcon sx={{ color: "#ffffff" }} />
          </Link>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Sidebar;
