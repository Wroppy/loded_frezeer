"use client";

import styles from "@/app/components/navbar/drawer/drawer.module.css";
import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";

const DrawerFooter = () => {

  const logout = async () => {
    await signOut();

    // Redirect to login page
    window.location.href = "/login";
  }

  return (
    <div className={styles.navFooter}>
      <IconButton>
        <Settings />
      </IconButton>
      <IconButton onClick={logout} className={`${styles.flip}`}>
        <LogoutIcon className={styles.logoutIcon}/>
      </IconButton>
    </div>
  );
};

export default DrawerFooter;
