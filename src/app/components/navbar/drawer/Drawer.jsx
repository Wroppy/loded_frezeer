import { Menu } from "@mui/icons-material";
import { Button } from "@mui/material";

import styles from "@/app/components/navbar/drawer/drawer.module.css";


const Drawer = () => {
  return (
    <Button className={styles.drawerButton}>
      <Menu />
    </Button>
  );
};

export default Drawer;
