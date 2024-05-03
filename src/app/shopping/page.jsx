
import styles from "@/app/shopping/shopping-page.module.css";
import ShoppingList from "@/app/components/shopping/shopping-list";
import ShoppingHeader from "@/app/components/shopping/shopping-page-header";


const ShoppingPage = () => {
  return (
    <div className={styles.shoppingPage}>
      <div className={styles.shoppingPageHeader}>
        <ShoppingHeader/>
      </div>
      <div className={styles.shoppingContent}>
        <ShoppingList/>
      </div>
    </div>
  );
};

export default ShoppingPage;
