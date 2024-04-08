import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import FlatSummary from "@/app/settings/flat-manager/flat-summary/flat-summary";
import NoFlat from "@/app/settings/flat-manager/enter-flat/no-flat";

const FlatManager = () => {
  return (
    <div className={styles.flatManager}>
      <h3>Manage your flat:</h3>
      <FlatSummary />
    </div>
  );
};

export default FlatManager;
