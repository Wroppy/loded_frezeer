import styles from "@/app/components/navbar/drawer/drawer.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const DrawerLinks = () => {
  const links = [
    { name: "Home", path: "/", Icon: HomeIcon },
    { name: "Chores", path: "/chores", Icon: CleaningServicesIcon },
    { name: "Expenses", path: "/expenses", Icon: AttachMoneyIcon },
    { name: "Shopping", path: "/shopping", Icon: FormatListBulletedIcon },
  ];

  return (
    <div className={styles.navLinks}>
      {links.map((link) => (
        <Button
          className={styles.navLink}
          Component={Link}
          href={link.path}
          key={link.name}
        >
          {<link.Icon />}
          <span>{link.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default DrawerLinks;
