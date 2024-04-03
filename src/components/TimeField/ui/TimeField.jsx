import { useState, useRef, useEffect } from "react";
import styles from "./timeField.module.css";
import { useDispatch } from "react-redux";
import {updateTimeField,deleteTimeField} from "../../../redux/slices/scheduleSlice";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";

function TimeField({ id, data, dayKey }) {


  const [newTime, setNewTime] = useState(null);
  const [disabled, setDisabled] = useState(true);
  
  const btnRef = useRef(null);
  const dispatch = useDispatch();

  const handleUpdateTime = (dayKey, id) => {
    if (!disabled && newTime) {
      dispatch(updateTimeField({ newTime, dayKey, id }));
      setDisabled(!disabled);
      setNewTime(null);
    } else {
      setDisabled(!disabled);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        btnRef.current &&
        !btnRef.current.contains(event.target) &&
        !disabled
      ) {
        setDisabled(!disabled);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [disabled]);

  const handleTest = (updatedTime) => {
    console.log(updatedTime);
    setNewTime(updatedTime);
  };

  return (
    <div ref={btnRef} className={styles.timeInput} key={id}>
      <div className={styles.inputForm}>
      <SingleInputTimeRangeField    disabled={disabled}
        sx={{ width: "100%"}}
        ampm={false}
        variant="standard"
        label="From-To"
        value={data}
        onChange={(newValue) => handleTest(newValue)}>
     
        </SingleInputTimeRangeField>

      </div>
     
      <div className={styles.iconGroup}>

        <Button
          onClick={() => {
            dispatch(deleteTimeField({ dayKey, id }));
          }}
        >
          <ClearOutlinedIcon color="disabled" />
        </Button>

        <Button
          onClick={() => {
            handleUpdateTime(dayKey, id);
          }}
        >
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
