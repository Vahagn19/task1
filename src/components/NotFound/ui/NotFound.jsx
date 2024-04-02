import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import styles from './notFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <SentimentVeryDissatisfiedIcon color="action" sx={{fontSize:"200px"}} />
     <h1>404</h1>
      <h2> Not Found</h2>
      <span>This page does not exist on server!</span>
    </div>
  );
}

export default NotFound;
