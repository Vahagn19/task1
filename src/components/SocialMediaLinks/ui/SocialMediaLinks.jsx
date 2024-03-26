import styles from "./socialMediaLinks.module.css";
import { Typography, TextField, InputAdornment } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { GitHub } from "@mui/icons-material";

function SocialMediaLinks() {
  return (
    <div className={styles.container}>
      <Typography className={styles.header} > My Accounts</Typography>
      <div className={styles.linkContainer}>
        <TextField
        fullWidth
          id="standard-read-only-input"
          label="Github"
          defaultValue="Enter Your Github username"
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <GitHub/>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <TextField
        fullWidth
          id="standard-read-only-input"
          label="Slack"
          defaultValue="Enter your Slack username"
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <AcUnitOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </div>
    </div>
  );
}

export default SocialMediaLinks;
