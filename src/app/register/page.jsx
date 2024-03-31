"use client";

import AuthForm from "@/app/components/user-auth-form/auth-form";
import styles from "@/app/register/register.module.css";
import { registerAction } from "@/app/lib/auth/registerAction";

const RegisterPage = () => {
  return (
    <div className={styles.page}>
      <AuthForm register={true} action={registerAction} />
    </div>
  );
};

export default RegisterPage;
