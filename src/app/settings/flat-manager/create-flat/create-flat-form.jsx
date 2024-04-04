"use client";

import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import { useState } from "react";

const CreateFlatForm = () => {
  const [loading, setLoading] = useState(false);

  const createFlat = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Get the flat name from the form
    const flatName = e.target.flatName.value.trim();

    // TODO: Send POST request to the api to add the new flat
    

    setLoading(false);
    
    
  };

  return (
    <Paper className={styles.createFormContainer}>
      <form onSubmit={createFlat} className={styles.createFlatForm}>
        <span className={styles.createFlatHeading}>Create a new flat:</span>
        <TextField
          name="flatName"
          size="small"
          label="Enter flat name"
          placeholder="Enter flat name"
          inputProps={{ minLength: 3, maxLength: 20 }}
          required
        />
        <div className={styles.createFlatButtonContainer}>
          {loading && <CircularProgress size={16} />}
          <Button
            disabled={loading}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default CreateFlatForm;
