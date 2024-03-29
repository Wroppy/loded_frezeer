"use client";

import styles from "@/app/login/login.module.css";
import AuthForm from "@/app/components/user-auth-form/auth-form";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession();
  const login = async (loginData) => {
    try {
      // gets the name and password from the form
      const { email, password } = loginData;

      // sends the name and password to the server to sign in
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        return { success: false, error: "Invalid Credentials" };
      }


      // Returns the users name
      return { success: false, error: session?.user?.name };
    } catch (e) {
      return { success: false, error: "An error occurred in the client" };
    }
  };

  return (
    <div className={styles.loginPage}>
      <AuthForm action={login} />
    </div>
  );
};

export default LoginPage;
