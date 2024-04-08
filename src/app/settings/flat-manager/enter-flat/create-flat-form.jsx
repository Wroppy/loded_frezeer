"use client";

import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import { useState } from "react";
import { fetchData } from "@/app/utils/clientFetch";

const CreateFlatForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createFlat = async (e) => {
    e.preventDefault();

    // Get the flat name from the form
    const flatName = e.target.flatName.value.trim();
    if (!flatName) return;

    setLoading(true);

    const data = await fetchData("create-flat", { flatName })
    
    setLoading(false);
    if (!data.success) {
      setError(data.error);

    }
      // TODO: Reload page to get flat data    
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
        <div className={styles.formFooter}>
          <div className={styles.error}>
            {error}
          </div>
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
        </div>
      </form>
    </Paper>
  );
};

export default CreateFlatForm;
