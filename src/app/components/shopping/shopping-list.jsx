"use client";

import { Button, FormGroup } from "@mui/material";
import ShoppingItem from "@/app/components/shopping/shopping-item";
import styles from "@/app/components/shopping/shopping-list.module.css";

const ShoppingList = () => {
  const shoppingList = [
    {
      name: "Milk",
      description: "2% milk",
      quantity: 1,
      addedBy: "Test 1",
      addedByCurrentUser: false,
    },
    {
      name: "Bread",
      description: "Whole grain",
      quantity: 1,
      addedBy: "Test 2",
      addedByCurrentUser: false,
    },
    {
      name: "Eggs",
      description: "",
      quantity: 1,
      addedBy: "Test 3",
      addedByCurrentUser: true,
    },
  ];

  return (
    <div className={styles.shoppingListItems}>
      {shoppingList.map((item, index) => (
        <ShoppingItem
          key={index}
          index={index.toString()}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          addedBy={item.addedBy}
          addedByCurrentUser={item.addedByCurrentUser}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
