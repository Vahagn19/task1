import image1 from "../../../assets/image1.png";
import RegisterForm from "../../RegisterForm";
import styles from "./Login.module.css";
import { Typography } from "@mui/material";

function Login() {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <img src={image1} alt="human" />
      </div>

      <RegisterForm />

   <footer className={styles.copy}>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "15px",
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} Playground: All rights reversed
        </Typography>
      </footer>
    </div>
  );
}

export default Login;
