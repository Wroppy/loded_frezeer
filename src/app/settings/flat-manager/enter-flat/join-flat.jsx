"use client";

import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import { useState } from "react";

const JoinFlat = ({ loading, setLoading }) => {
  const [error, setError] = useState("");

	const joinFlat = async (e) => {
			e.preventDefault();

			setLoading(true);
	};

  return (
    <Paper>
      <form className={styles.joinFlat}>
        <span className={`${styles.joinFlatHeading}`}>Join Flat:</span>
        <TextField
          name="flatJoinCode"
          size="small"
          label="Enter flat join code"
          placeholder="Enter join code"
          inputProps={{ minLength: 8, maxLength: 8 }}
          required
        />
        <div className={styles.formFooter}>
          <div className={styles.error}>{error}</div>
          <div className={styles.joinFlatButton}>
					{loading && <CircularProgress size={16} />}

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              disabled={loading}
              onClick={joinFlat}
            >
							Join Flat
						</Button>
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default JoinFlat;
