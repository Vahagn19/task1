import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { Button, Divider, Grid, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTimeField,
  deleteTimeField,
  updateTimeField,
} from "../../../redux/slices/scheduleSlice";
import styles from "./workLogs.module.css";
import TimeField from "../../TimeField";

function WorkLogs() {


  const dispatch = useDispatch();
  const schedule = useSelector((state) => {
    return state.schedule;
  });

 
console.log(schedule);
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
                {value.map(({ id, time }) => {
                  return (
                    <TimeField dayKey={key} id={id} time={time} key={id}/>
               
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
