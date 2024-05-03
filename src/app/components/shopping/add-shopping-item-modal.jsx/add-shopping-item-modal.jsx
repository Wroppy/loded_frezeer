"use client";

import { Modal, Paper, Slider, TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from "./add-shopping-item-modal.module.css";

const AddShoppingItemModal = ({ open, closeModal }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("example error message");

  const quantityChanged = (value) => {
    setQuantity(value);
  };

  const checkQuantity = (value) => {
    if (value < 1) {
      setQuantity(1);
    } else if (value > 10) {
      setQuantity(10);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();


  }

  return (
    <Modal className={styles.modal} open={open} onClose={closeModal}>
      <Paper className={styles.addShoppingItemModal}>
        <div className={styles.title}>Add Shopping Item</div>

        <form onSubmit={onSubmit}>
          <div className={styles.shoppingInputs}>
            <TextField
              inputProps={{ maxLength: 50, minLength: 3 }}
              required
              size="small"
              label="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="E.g. Milk, Bread, etc."
            />
            <div className={styles.quantitySelect}>
              <TextField
                required
                size="small"
                label="Quantity"
                value={quantity}
                onChange={(e) => quantityChanged(e.target.value)}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                className={styles.quantityInput}
                inputProps={{
                  min: 1,
                  max: 10,
                }}
                onBlur={(e) => checkQuantity(e.target.value)}
              />
              <Slider
                value={quantity}
                onChange={(e, value) => quantityChanged(value)}
                min={1}
                max={10}
                valueLabelDisplay="auto"
                marks
              />
            </div>
            <TextField
              inputProps={{ maxLength: 500, minLength: 0 }}
              multiline
              rows={10}
              size="small"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="E.g. Brand, Size, etc."
            />
          </div>
          <div className={styles.formFooter}>
            <div className={styles.error}>{error}</div>
            <Button variant="outlined" className={styles.cancelButton} onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="contained" className={styles.addButton} type="submit">
              Add Item
            </Button>
          </div>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddShoppingItemModal;
