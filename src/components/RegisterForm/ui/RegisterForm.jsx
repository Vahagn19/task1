import styles from "./registerForm.module.css";
import { TextField, Button } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";

function RegisterForm() {
  const email = "test@gmail.com";
  const password = "111111";

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log("Sign up Error", err);
    }
    console.log("register succesfull");
  };

  const handleSignIn = async () => {
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      const user = userInfo.user;
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2 className={styles.headline}>Login</h2>

        <div className={styles.login}>
          <TextField id="outlined-number" label="Standard" variant="standard" />

          <Button
            className={styles.button}
            style={{ background: "#003367" }}
            variant="contained"
            onClick={handleSignIn}
          >
            Send Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
