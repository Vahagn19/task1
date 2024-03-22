import styles from "./sidebar.module.css";
import { AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DashboardIcon from "@mui/icons-material/Dashboard";

function Sidebar() {
  return (
    <AppBar
      sx={{
        width: "64px",
        height: "900px",
        position: "relative",
        // top: "0",
        // left: "0",
       
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

      <IconButton>
        <PermContactCalendarIcon />
      </IconButton>
      <IconButton>
        <DashboardIcon />
      </IconButton>
    </AppBar>
  );
}

export default Sidebar;
