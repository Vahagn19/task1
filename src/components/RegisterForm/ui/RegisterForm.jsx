
import styles from "./registerForm.module.css";
import { TextField, Button, Alert } from "@mui/material";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../../utils/validate";
import { handleLogin} from "../../../services/apiService";
import {  useDispatch, useSelector } from "react-redux";



function RegisterForm() {


const user = useSelector((state)=>{
  return state.user
})
  const [alert, setalert] = useState(false);
  const [switcher, setSwitcher] = useState(true);

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

console.log(user);

  const handleSubmit = async () => {
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

    if (password === "123456") {
      try{
         await dispatch(handleLogin(userEmail,password)) 
        navigate("/dashboard")
        console.log(user);
      }catch(error){
        console.log(error.message)
        return
      }
   }

  }



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
              type="email"
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
              renderInput={(props) => <input  {...props} />}
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
