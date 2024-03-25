
import { AppBar, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [profileBtn, setProfileBtn] = useState(false);
  const [dashBtn, setDashBtn] = useState(false);

  const handleProfileClick = () => {
    setProfileBtn(true);
    setDashBtn(false); 
    console.log(profileBtn,"profile");
  };

  const handleDashboardClick = () => {
    setDashBtn(true);
    setProfileBtn(false); 
    console.log(dashBtn,"dash");
  };


 

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
        <ListItem>
          <Link to="/profile" onClick={handleProfileClick}>
            <PermContactCalendarIcon sx={{ color: profileBtn? "#ffffff": "inherit" }} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard" onClick={handleDashboardClick}>
            <DashboardIcon sx={{ color: dashBtn? "#ffffff": "inherit" }} />
          </Link>
        </ListItem>
      </List>
    </AppBar>
  );
}

export default Sidebar;
