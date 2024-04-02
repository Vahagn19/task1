import { AppBar, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <AppBar
      sx={{
        width: "74px",
        height: "100vh",
        position: "relative",
        background:"#003367",
}}>
      <IconButton
        size="medium"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 0,p:2 }}>
        <MenuIcon />
      </IconButton>

      <List sx={{mt:"25px",p:"10px"}}>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/">
            <PermContactCalendarIcon sx={{ color: pathname === "/" ? "#ffffff" : "#87898b" }} />
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link to="/dashboard">
            <DashboardIcon
              sx={{ color: pathname === "/dashboard" ? "#ffffff" : "#87898b" }}
            />
          </Link>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Sidebar;
