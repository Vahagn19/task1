import styles from "./sidebar.module.css";
import { AppBar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Sidebar() {
  return (
    <div>
      <AppBar className={styles.AppBar}>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <IconButton>
            <PermContactCalendarIcon/>
        </IconButton>
        <IconButton>
            <DashboardIcon/>
        </IconButton>
      </AppBar>
    </div>
  );
}

export default Sidebar;
