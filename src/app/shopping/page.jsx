"use client";

import styles from "@/app/shopping/shopping-page.module.css";
import ShoppingItem from "@/app/components/shopping/shopping-item";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

const shopping = [
  {
    name: "Milk",
    description: "2% milk",
    quantity: 1,
    addedBy: "Test 1",
  },
  {
    name: "Bread",
    description: "Whole grain",
    quantity: 1,
    addedBy: "Test 2",
  },
  {
    name: "Eggs",
    description: "",
    quantity: 1,
    addedBy: "Test 3",
  },
];

const ShoppingPage = () => {
  const [shoppingList, setShoppingList] = useState(shopping);

  return (
    <div className={styles.shoppingPage}>
      <div className={styles.shoppingPageHeader}></div>
      <div className={styles.shoppingContent}>
        <div className={styles.shoppingItems}>
          {shoppingList.map((item, index) => (
            <ShoppingItem
              key={index}
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              addedBy={item.addedBy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
