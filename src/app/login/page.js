"use client";

import styles from "@/app/login/login.module.css";
import AuthForm from "@/app/components/user-auth-form/auth-form";
import { login } from "@/app/utils/login";

const LoginPage = () => {

  const submitLogIn = async (loginData) => {
    try {
      // gets the name and password from the form
      const { email, password } = loginData;

      const res = await login(email, password);

      if (!res.success) {
        return { success: false, error: res.error };
      }

      // Sign in successful, redirects to the home page
      return { success: true };
    } catch (e) {
      return { success: false, error: "An error occurred in the client" };
    }
  };

  return (
    <div className={styles.loginPage}>
      <AuthForm action={submitLogIn} />
    </div>
  );
};

export default LoginPage;
