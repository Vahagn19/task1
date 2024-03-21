import styles from "./registerPage.module.css";
import { TextField, Button } from "@mui/material";

function RegisterForm() {
  return (
    <div className={styles.container}>
    <div className={styles.loginForm}>
      <h2 className={styles.headline}>Login</h2>

      <div className={styles.login}>
      <TextField id="outlined-number" label="Standard" variant="standard" />

       <Button className={styles.button} style={{ background: "#003367" }} variant="contained">
        Send Code
      </Button>

      </div>
      </div>
    </div>
  );
}

export default RegisterForm;


// style={{ background: "#003367" }} variant="contained"