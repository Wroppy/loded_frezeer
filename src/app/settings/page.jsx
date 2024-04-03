import styles from "@/app/settings/settings.module.css";
import SettingsHeading from "@/app/settings/settings-heading";
import FlatManager from "@/app/settings/flat-manager/flat-manager";


const SettingsPage = () => {
  return ( <div className={styles.settingsPage}>
    <SettingsHeading/>
    <FlatManager/>
    
  </div>);
}
 
export default SettingsPage;