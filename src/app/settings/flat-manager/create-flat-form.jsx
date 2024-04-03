import { Button, Paper, TextField } from "@mui/material";
import styles from "@/app/settings/settings.module.css";

const CreateFlatForm = () => {
  return (
    <Paper className={styles.createFormContainer}>
      <form className={styles.createFlatForm}>
        <span className={styles.createFlatHeading}>Create a new flat:</span>
        <TextField
          size="small"
          label="Enter flat name"
          placeholder="Enter flat name"
        />
        <div className={styles.createFlatButtonContainer}>
          <Button variant="outlined" color="primary" type="submit">
            Create
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default CreateFlatForm;
