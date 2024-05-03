"use client";

import { Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddShoppingItemModal from "./add-shopping-item-modal";
import { useState } from "react";

const ModalButton = ({ className }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        className={className}
        onClick={openModal}
      >
        Add Item <AddOutlinedIcon />
      </Button>
      <AddShoppingItemModal open={open} closeModal={closeModal} />
    </>
  );
};

export default ModalButton;
