import { Paper } from "@mui/material";
import styles from "@/app/settings/settings.module.css";

const TenantListView = () => {
    const tenants = [
        "John Doe",
        "Jane Doe",
        "John Smith",
        "Jane Smith",
        "John Doe",
    ]
    
    return ( <Paper className={styles.tenantListView}>
        <div>Tenants: ({tenants.length} total)</div>
        <ul>
            {tenants.map((tenant, index) => (
                <li key={index}>{tenant}</li>
            ))}
        </ul>
    </Paper> );
}
 
export default TenantListView;