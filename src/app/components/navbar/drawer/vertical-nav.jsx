"use client";

import { Menu } from "@mui/icons-material";
import { Button, Drawer } from "@mui/material";

import styles from "@/app/components/navbar/drawer/drawer.module.css";
import { useState } from "react";
import DrawerHeader from "@/app/components/navbar/drawer/drawer-header";
import DrawerLinks from "@/app/components/navbar/drawer/drawer-links";
import DrawerFooter from "@/app/components/navbar/drawer/drawer-footer";
import { useSession } from "next-auth/react";

const VerticalNav = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        <div className={styles.drawer}>
          <DrawerHeader />
          <DrawerLinks />
          <DrawerFooter />
        </div>
      </Drawer>
      <Button disabled={!session}  onClick={openDrawer} className={styles.drawerButton}>
        <Menu />
      </Button>
    </>
  );
};

export default VerticalNav;
