import { Box, TextField } from "@mui/material";
import { useState } from "react";
import styles from './profile.module.css'

function Profile() {
  const [data, setData] = useState([
    { label: "First Name", value: "My Name", id: "1", width: "223px" },
    { label: "Second Name", value: "My Surname", id: "2", width: "223px" },
    { label: "Date of Birth ", value: "Date", id: "3", width: "223px" },
    { label: "Email", value: " Email", id: "4", width: "345px" },
    { label: "Personal Email", value: "Personal Email", id: "5", width: "345px" },
    { label: "Number", value: "Mobile Number", id: "6", width: "345px" },
    { label: "Start Date", value: "18.01.2024", id: "7", width: "223px" },
    { label: "Absences", value: "22", id: "8", width: "223px" },
  ]);

  return (
    <Box sx={{width:"1100px"}}>
      {data.map((item) => {
        return (
          <TextField
            sx={{ width: item.width, m: 2 }}
            key={item.is}
            id="standard-read-only-input"
            label={item.label}
            defaultValue={item.value}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        );
      })}
    </Box>
  );
}

export default Profile;
