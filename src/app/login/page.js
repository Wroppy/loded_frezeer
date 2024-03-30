"use client";

import styles from "@/app/login/login.module.css";
import AuthForm from "@/app/components/user-auth-form/auth-form";
import { logInAction } from "@/app/lib/auth/logInAction";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <AuthForm action={logInAction} />
    </div>
  );
};

export default LoginPage;
