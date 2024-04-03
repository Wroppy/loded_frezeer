import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import FlatSummary from "./flat-summary/flat-summary";

const FlatManager = () => {
  return (
    <div className={styles.flatManager}>
      <h3>Manage your flat:</h3>
      <FlatSummary />
    </div>
  );
};

export default FlatManager;
