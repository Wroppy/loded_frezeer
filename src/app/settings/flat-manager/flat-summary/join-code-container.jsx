"use client";

import { Paper, IconButton } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const JoinCodeContainer = ({ joinCode }) => {
  const copy = () => {
    navigator.clipboard.writeText(joinCode);
  }
  return (
    <Paper className={styles.joinCode}>
      <span>Join Code: {joinCode}</span>
      <IconButton onClick={copy}>
        <ContentCopyIcon sx={{ fontSize: 16 }} />
      </IconButton>
    </Paper>
  );
};

export default JoinCodeContainer;
