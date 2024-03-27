import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { Button, Divider, Grid, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue, addTimeField } from "../../../redux/slices/scheduleSlice";
import styles from "./workLogs.module.css";


function WorkLogs() {



  const [newTime, setNewTime] = useState(null);

  const dispatch = useDispatch();
  const schedule = useSelector((state) => {
    return state.schedule;
  });



  const handleAddTime = (key) => {

    dispatch(setValue({ newTime, key }));
    setNewTime(null);

  };
  console.log(newTime);


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <Typography className={styles.gridInfo}>Work Logs </Typography>
        <Grid container spacing={2}>
          {schedule.map(({ key, value, id }) => {
            return (
              <Grid item xs={2} key={id}>
                <Typography sx={{ margin: "8px" }}> {key}</Typography>
                <Divider />
                {value.map((values, index) => {
                  return (
                    <div className={styles.timeInput} key={index}>
                      <SingleInputTimeRangeField
                        sx={{ width: "100%" }}
                        ampm={false}
                        variant="standard"
                        label="From-To"
                        value={values}
                        onChange={(newValue) => setNewTime(newValue)}
                      />
                      <div className={styles.iconGroup}>
                        <Button>
                          <ClearOutlinedIcon color="disabled" />
                        </Button>
                        <Button onClick={() => handleAddTime(key)}>
                          <AccessTimeOutlinedIcon color="disabled" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
                <Button
                  onClick={() => {
                    dispatch(addTimeField({ key }));
                  }}
                >
                  Gumarum
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </LocalizationProvider>
  );
}

export default WorkLogs;
