import { TextField } from "@mui/material";
import { Grid } from "@mui/material/";
import styles from "./profile.module.css";
import WorkLogs from "../../WorkLogs/ui/WorkLogs";

function Profile() {
  const data = [
    { label: "First Name", value: "My Name", id: "1", md: 3 },
    { label: "Second Name", value: "My Surname", id: "2", md: 3 },
    { label: "Date of Birth ", value: "Date", id: "3", md: 3 },
    { label: "Email", value: " Email", id: "4", width: 4 },
    { label: "Personal Email", value: "Personal Email", id: "5", width: 4 },
    { label: "Number", value: "Mobile Number", id: "6", md: 4 },
    { label: "Start Date", value: "18.01.2024", id: "7", md: 3 },
    { label: "Absences", value: "22", id: "8", md: 2 },
  ];

  return (
    <div className={styles.gridContainer}>
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item xs={4} md={item.md} key={item.id}>
              <TextField
                fullWidth
                id="standard-read-only-input"
                label={item.label}
                defaultValue={item.value}
                InputProps={{
                  readOnly: true,
                  style: { borderColor: "transparent" },
                }}
                variant="standard"
              />
            </Grid>
          );
        })}
      </Grid>
      <WorkLogs />
    </div>
  );
}

export default Profile;
