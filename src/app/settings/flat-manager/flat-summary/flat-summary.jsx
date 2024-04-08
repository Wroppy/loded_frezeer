import TenantListView from "@/app/settings/flat-manager/flat-summary/tenants-listview";
import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import JoinCodeContainer from "@/app/settings/flat-manager/flat-summary/join-code-container";
const FlatSummary = async () => {
  const flatName = "Flat 1A";
  const joinCode = "abcdefgh";

  return (
    <div>
      <Paper className={styles.flatName}>Flat Name: {flatName}</Paper>
      <JoinCodeContainer joinCode={joinCode} />
      <TenantListView />
    </div>
  );
};

export default FlatSummary;
