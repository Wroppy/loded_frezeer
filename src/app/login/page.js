"use client";

import styles from "@/app/login/login.module.css";
import AuthForm from "@/app/components/user-auth-form/auth-form";
import { postFetch } from "@/app/lib/clientFetch";

const LoginPage = () => {
  const login = async (loginData) => {
    try {
      // gets the name and password from the form
      const { email, password } = loginData;

      // sends the data to the server
      const response = await postFetch("login", { email, password });

      // if the request was not successful, the user is not logged in
      if (!response.ok) {
        return { success: false, error: "An error occurred in the server" };
      }

      // if the request was successful, checks for an error
      const data = await response.json();
      if (data.error) {
        return { success: false, error: data.error };
      }

      // if there is no error, the user is logged in
      return { success: true };
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
