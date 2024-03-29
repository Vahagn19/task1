import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTimeField } from "../../../redux/slices/scheduleSlice";
import AddIcon from "@mui/icons-material/Add";
import styles from "./workLogs.module.css";
import TimeField from "../../TimeField";

function WorkLogs() {
  const dispatch = useDispatch();
  const schedule = useSelector((state) => {
    return state.schedule;
  });

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
                {value.map(({ id, data }) => {
                  return (
                    <TimeField dayKey={key} id={id} data={data} key={id} />
                  );
                })}
                <Button
                  className={styles.addBtn}
                  sx={{ background: "#EBEEEF", width: "100%" }}
                  onClick={() => {
                    dispatch(addTimeField({ key }));
                  }}
                >
                  <AddIcon color="disabled" />
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
