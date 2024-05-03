import styles from "@/app/components/shopping/shopping-page-header.module.css";
import ModalButton from "@/app/components/shopping/add-shopping-item-modal.jsx/modal-button";

const ShoppingHeader = () => {

  return (
    <div className={styles.shoppingHeader}>
      <ModalButton/>
    </div>
  );
};

export default ShoppingHeader;
