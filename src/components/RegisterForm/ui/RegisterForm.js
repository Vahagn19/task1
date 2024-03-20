import styles from "./registerPage.module.css";
import { TextField } from "@mui/material";


function RegisterForm() {
  return (
    <div className={styles.navBar}>
      <TextField
        id="outlined-number"
        label="Standard"
        variant="standard"
       
      />
    </div>
  );
}

export default RegisterForm;
