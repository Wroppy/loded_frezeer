import styles from "@/app/components/shopping/shopping-item.module.css";
import { Button, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ShoppingItemButtons = ({ addedByCurrentUser }) => {
  return (
    <div className={styles.shoppingItemButtons}>
      <IconButton size="small">
        <ShoppingCartOutlinedIcon fontSize="small" />
      </IconButton>
      {addedByCurrentUser && (
        <>
          <IconButton size="small">
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default ShoppingItemButtons;
