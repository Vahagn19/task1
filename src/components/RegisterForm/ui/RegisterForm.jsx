import styles from "./registerForm.module.css";
import { TextField, Button, Alert, Typography } from "@mui/material";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../../utils/validate";
import { handleLogin } from "../../../redux/slices/userSlice";
import { useAppDispatch } from "../../../redux/store/store";

function RegisterForm() {
  const [alert, setalert] = useState(false);
  const [switcher, setSwitcher] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!validateEmail(email) && switcher) {
      setalert(true);
      setEmail("");
      return;
    }

    setalert(false);
    setSwitcher(false);
    if (!validatePassword(password) && !switcher) {
      setalert(true);
      setPassword("");
      return;
    }

    if (password === "123456") {
      try {
        await dispatch(handleLogin({ email, password }));
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
        return;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2 className={styles.headline}>Login</h2>
        {alert ? (
          <Alert severity="error" sx={{mt:"20px",mb:"20px"}}>
            Please enter a valid {switcher ? "email" : "code"}
          </Alert>
        ) : null}

        <div className={styles.login}>
          {switcher ? (
            <TextField
              id="outlined-number"
              label="Enter your email"
              variant="standard"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <div>
              <Typography variant="body2" className={styles.infoText}>
                To finalize your verification please enter the code that has
                been sent to your email addres/SMS
              </Typography>
              <OtpInput
                value={password}
                onChange={setPassword}
                numInputs={6}
                containerStyle={{ width: "100%" }}
                inputStyle={styles.input}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      borderBottom: alert ? "2px solid red" : "2px solid",
                    }}
                  />
                )}
              />
            </div>
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
