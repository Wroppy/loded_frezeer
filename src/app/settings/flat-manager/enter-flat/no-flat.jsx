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
        <br/>
        <span className={styles.flatSetUpText}>
          Beware! If you join a new flat, you will not be able to leave!
        </span>
      </Paper>
      {/* Form for creating or joining a new flat */}
      <EnterFlat />
    </>
  );
};

export default NoFlat;
