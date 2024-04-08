import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import CreateFlatForm from "@/app/settings/flat-manager/enter-flat/create-flat-form";

const NoFlat = () => {
  return (
    <>
     <Paper className={styles.flatName}>
        <span className={styles.flatSetUpText}>
          You have not set up a flat yet. Create a new one below.
        </span>
      </Paper>
      {/* Form for creating a new flat */}
      <CreateFlatForm />
    </>
  );
};

export default NoFlat;
