import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './loading.module.css'
 function Loading() {
    return (
      
        <Box className={styles.loading}>
            <CircularProgress />
        </Box>
       
    );
}


export default Loading