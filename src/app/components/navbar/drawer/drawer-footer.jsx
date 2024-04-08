"use client";

import styles from "@/app/components/navbar/drawer/drawer.module.css";
import { Settings } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

const DrawerFooter = () => {
  const router = useRouter();

  const logout = async () => {
    // Remove token from cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });

    // Redirect to login page
    window.location.href = "/login";
  }

  const settings = () => {
    router.push("/settings");
  }


  return (
    <div className={styles.navFooter}>
      <IconButton onClick={settings}>
        <Settings />
      </IconButton>
      <IconButton onClick={logout} className={`${styles.flip}`}>
        <LogoutIcon className={styles.logoutIcon}/>
      </IconButton>
    </div>
  );
};

export default DrawerFooter;
