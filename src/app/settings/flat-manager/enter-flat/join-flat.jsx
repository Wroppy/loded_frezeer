"use client";

import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import { useState } from "react";
import { fetchData } from "@/app/utils/clientFetch";

const JoinFlat = ({ loading, setLoading }) => {
  const [error, setError] = useState("");

  

	const joinFlat = async (e) => {
			e.preventDefault();

			setLoading(true);

      const joinId = e.target.flatJoinCode.value;

      const response = await fetchData("join-flat", {joinId});

      if (response.success) {
        window.location.reload();
      }

      if (response.error) {
        setError(response.error);
      }

      setLoading(false);
	};

  return (
    <Paper>
      <form className={styles.joinFlat} onSubmit={joinFlat}>
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
