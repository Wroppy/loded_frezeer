import TenantListView from "@/app/settings/flat-manager/flat-summary/tenants-listview";
import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";
import JoinCodeContainer from "@/app/settings/flat-manager/flat-summary/join-code-container";
const FlatSummary = ({flatName, joinCode, tenants}) => {

  return (
    <div>
      <Paper className={styles.flatName}>Flat Name: {flatName}</Paper>
      <JoinCodeContainer joinCode={joinCode} />
      <TenantListView tenants={tenants}/>
    </div>
  );
};

export default FlatSummary;
