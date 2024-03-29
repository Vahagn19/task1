import React, { useEffect } from "react";
import styles from "./registerForm.module.css";
import { TextField, Button, Alert } from "@mui/material";
import OtpInput from "react-otp-input";
import { useState } from "react";

import { validateEmail, validatePassword } from "../../../utils/validate";
import { handleLogin } from "../../Test.jsx/Test";

function RegisterForm() {
  const [alert, setalert] = useState(false);
  const [switcher, setSwitcher] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!validateEmail(userEmail) && switcher) {
      setalert(true);
      setUserEmail("");
      return;
    }
    setalert(false);
    setSwitcher(false);
    if (!validatePassword(password) && !switcher) {
      setalert(true);
      setPassword("");
      return
    } 
}
// useEffect(()=>{
//   handleLogin()
// },[])

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2 className={styles.headline}>Login</h2>
        {alert ? (
          <Alert severity="error">
            Please enter a valid {switcher ? "email" : "code"}
          </Alert>
        ) : null}

        <div className={styles.login}>
          {switcher ? (
            <TextField
              id="outlined-number"
              label="Enter your email"
              variant="standard"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          ) : (
            <OtpInput
              value={password}
              onChange={setPassword}
              numInputs={6}
              containerStyle={{ width: "100%" }}
              inputStyle={styles.input}
              renderInput={(props) => <input {...props} />}
            />
          )}

          <Button
            className={styles.button}
            style={{ background: "#003367" }}
            variant="contained"
            onClick={handleSubmit}
          >
            {switcher ? "Send Code" : "Submit"}
          </Button>
  
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
