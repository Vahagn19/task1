import styles from "./dashboard.module.css";
import image2 from '../../../assets/image2.png'
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {


const navigate = useNavigate()


  const logout = ()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    navigate("/")
  }
  return (
    <div className={styles.container}>
      <img src={image2} className={styles.image} alt="human1"/>

      <Typography mt={3} variant="h2" className={styles.headline}>
        COMING SOON
      </Typography>

      <Button sx={{mt:"24px",background:"#003367" }} variant="contained" className={styles.editBtn}>
        EDIT MY PROFILE AND MY WORKLOG
      </Button>

      <Button sx={{mt:"24px"}} className={styles.logoutBtn} onClick={logout}> LOGOUT</Button>
    </div>
  );
}

export default Dashboard;
