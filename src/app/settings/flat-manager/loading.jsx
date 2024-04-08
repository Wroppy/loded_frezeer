import Skeleton from '@mui/material/Skeleton';
import styles from "@/app/settings/settings.module.css";

const LoadingSkeleton = () => {
  return ( <div className={styles.skeleton}>
    <Skeleton variant="container" height={51}/>
    <Skeleton variant="container" height={64}/>

    <Skeleton variant="container" width={"100%"} height={178}/>
  </div> );
}
 
export default LoadingSkeleton;