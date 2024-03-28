import { useState } from "react";
import styles from "./timeField.module.css";
import { useDispatch } from "react-redux";
import {
  updateTimeField,
  deleteTimeField,
} from "../../../redux/slices/scheduleSlice";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";

function TimeField({ id, time, dayKey }) {
  const [newTime, setNewTime] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
;
  const handleAddTime = (dayKey, id) => {
    if (!disabled) {

      dispatch(updateTimeField({ newTime, dayKey, id }));
      setDisabled(!disabled);
      setNewTime(null);
    } else {
        setDisabled(!disabled);
    }

   
  };

  return (
    <div className={styles.timeInput} key={id}>
      <SingleInputTimeRangeField
        disabled={disabled}
        sx={{ width: "100%" }}
        ampm={false}
        variant="standard"
        label="From-To"
        value={time}
        onChange={(newValue) => setNewTime(newValue)}
      />
      <div className={styles.iconGroup}>
        <Button
          onClick={() => {
            dispatch(deleteTimeField({ dayKey, id }));
          }}
        >
          <ClearOutlinedIcon color="disabled" />
        </Button>
        <Button onClick={handleAddTime}>
          {disabled ? (
            <AccessTimeOutlinedIcon color="disabled" />
          ) : (
            <DoneIcon />
          )}
        </Button>
      </div>
    </div>
  );
}

export default TimeField;
