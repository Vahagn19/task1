import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { Button } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useState } from "react";
import styles from "./workLogs.module.css";

function WorkLogs() {
  const [value, setValue] = useState(null);
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.timeInput}>
        <SingleInputTimeRangeField
          ampm={false}
          variant="standard"
          label="Controlled field"
          value={value}
          onChange={(newvalue) => setValue(newvalue)}
        />
        <div className={styles.iconGroup}>
          <Button>  <ClearOutlinedIcon color="disabled"/></Button>
       <Button><AccessTimeOutlinedIcon color="disabled" /></Button>
          
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default WorkLogs;
