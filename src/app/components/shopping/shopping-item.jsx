import styles from "@/app/components/shopping/shopping-item.module.css";
import { Paper } from "@mui/material";
import ShoppingItemDescription from "@/app/components/shopping/shopping-item-description";

const ShoppingItem = ({ name, description, quantity, addedBy }) => {

  return (
    <Paper className={styles.shoppingItem}>
      
      <div className={styles.shoppingItemHeader}>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemQuantity}>Quantity: {quantity}</div>
      </div>
      <div className={styles.itemDescription}>
        <ShoppingItemDescription description={description} />
      </div>
      <div className={styles.itemAddedBy}>Added by {addedBy}</div>
    </Paper>
  );
};


export default ShoppingItem;
