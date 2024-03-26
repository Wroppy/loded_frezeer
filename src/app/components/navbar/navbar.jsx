import styles from "@/app/components/navbar/navbar.module.css";
import NavHeader from "@/app/components/navbar/nav-heading/NavHeader";
import Drawer from "./drawer/Drawer";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Drawer />
      <NavHeader />
    </div>
  );
};

export default Navbar;
