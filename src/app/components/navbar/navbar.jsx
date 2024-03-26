import styles from "@/app/components/navbar/navbar.module.css";
import NavHeader from "@/app/components/navbar/nav-heading/NavHeader";
import VerticalNav from "./drawer/vertical-nav";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <VerticalNav />
      <NavHeader />
    </div>
  );
};

export default Navbar;
