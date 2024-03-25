import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import styles from "./workLogs.module.css";
import { useState } from "react";

function WorkLogs() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SingleInputTimeRangeField
      variant="outlined"
        label="Controlled field"
        value={value}
        onChange={(newvalue) => setValue(newvalue)}
      />
      <SingleInputTimeRangeField 
      variant="outlined"
      label="From - To" />
    </LocalizationProvider>
  );
}

export default WorkLogs;
