import styles from "@/app/components/shopping/shopping-page-header.module.css";
import { Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const ShoppingHeader = () => {
  return (
    <div className={styles.shoppingHeader}>
      <Button variant="outlined" color="primary" className={styles.addItemButton}>
        Add Item <AddOutlinedIcon />
      </Button>
    </div>
  );
};

export default ShoppingHeader;
