"use client";

import styles from "@/app/components/shopping/shopping-item.module.css";
import { Paper, Checkbox } from "@mui/material";
import ShoppingItemDescription from "@/app/components/shopping/shopping-item-description";
import { useState } from "react";

const ShoppingItem = ({ name, description, quantity, addedBy }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <Paper
      className={`${styles.shoppingItem} ${checked && styles.checkedItem}`}
      onClick={handleCheck}
    >
      <div className={styles.shoppingItemHeader}>
        <div className={styles.checkBoxHeading}>
          <Checkbox checked={checked} onChange={handleCheck} />
          <div className={styles.itemName}>{name}</div>
        </div>
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
