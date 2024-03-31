"use client";

import AuthForm from "@/app/components/user-auth-form/auth-form";
import styles from "@/app/register/register.module.css";
import { register } from "@/app/lib/auth/register";

const RegisterPage = () => {
  return (
    <div className={styles.page}>
      <AuthForm register={true} action={register} />
    </div>
  );
};

export default RegisterPage;
