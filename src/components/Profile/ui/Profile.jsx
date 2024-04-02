import { TextField, Typography, Grid, Divider } from "@mui/material";

import styles from "./profile.module.css";
import WorkLogs from "../../WorkLogs/ui/WorkLogs";
import SocialMediaLinks from "../../SocialMediaLinks";

const data = [
  { label: "First Name", value: "My Name", id: "1", md: 3 },
  { label: "Second Name", value: "My Surname", id: "2", md: 3 },
  { label: "Date of Birth ", value: "01.01.2020", id: "3", md: 3 },
  { label: "Email", value: " Email", id: "4", md: 4 },
  { label: "Personal Email", value: "Personal Email", id: "5", md: 4 },
  { label: "Number", value: "Mobile Number", id: "6", md: 4 },
  { label: "Start Date", value: "18.01.2024", id: "7", md: 3 },
  { label: "Absences", value: "22", id: "8", md: 2 },
];

function Profile() {


  return (
    <div className={styles.container}>
      <Typography variant="h5">My Profile</Typography>

      <div className={styles.infoContainer}>
        <div className={styles.gridContainer}>
          <Typography className={styles.gridInfo}>General Info</Typography>
          <Grid container spacing={3} className={styles.gridItems}>
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
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <SocialMediaLinks />
      </div>

      <WorkLogs />
    </div>
  );
}

export default Profile;
