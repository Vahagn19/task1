import styles from "./dashboard.module.css";
import image2 from "../../../photo/image2.png";
import { Typography, Button } from "@mui/material";

function Dashboard() {
  return (
    <div className={styles.container}>
      <img src={image2} className={styles.image} alt="human1"/>

      <Typography variant="h2" className={styles.headline}>
        COMING SOON
      </Typography>

      <Button style={{ background: "#003367" }} variant="contained" className={styles.editBtn}>
        EDIT MY PROFILE AND MY WORKLOG
      </Button>

      <Button className={styles.logoutBtn}> LOGOUT</Button>
    </div>
  );
}

export default Dashboard;
