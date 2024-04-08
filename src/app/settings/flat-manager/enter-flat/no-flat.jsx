import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import EnterFlat from "./enter-flat";

const NoFlat = () => {
  return (
    <>
     <Paper className={styles.flatName}>
        <span className={styles.flatSetUpText}>
          You have not set up a flat yet. Create a new one or join one below.
        </span>
      </Paper>
      {/* Form for creating or joining a new flat */}
      <EnterFlat />
    </>
  );
};

export default NoFlat;
