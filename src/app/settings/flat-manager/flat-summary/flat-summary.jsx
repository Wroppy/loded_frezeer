import TenantListView from "@/app/settings/flat-manager/flat-summary/tenants-listview";
import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";


const FlatSummary = () => {
  const flatName = "Flat 1A";
  return (
    <div>
      <Paper className={styles.flatName}>Flat Name: {flatName}</Paper>
      <TenantListView/>
    </div>
  );
};

export default FlatSummary;
