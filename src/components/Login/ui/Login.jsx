import image1 from "../../../photo/image1.png";
import RegisterForm from "../../RegisterForm";
import styles from "./Login.module.css";
import { Typography, Box } from "@mui/material";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image1} alt="human" />
      </div>
      <RegisterForm />

      <footer className={styles.copy}>
        <Typography variant="body1" component="p">
          <Box
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "15px",
              textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} Playground: All rights reversed
          </Box>
        </Typography>
      </footer>
    </div>
  );
}

export default Login;
