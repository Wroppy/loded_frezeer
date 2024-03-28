"use client";

import AuthForm from "@/app/components/user-auth-form/auth-form";
import styles from "@/app/register/register.module.css";
import { postFetch } from "@/app/lib/clientFetch";

const RegisterPage = () => {
  // Registers a user with the given form data
  const register = async (registerData) => {
    // Returns are dealt with in the AuthForm component
    try {
      // Sends a request to the server to register the user
      const res = await postFetch("register", registerData);

      // If the request was not successful, the user is not registered
      if (!res.ok) {
        return { success: false, error: "An error occurred in the server" };
      }

      // If the request was successful, checks for an error
      const data = await res.json();
      if (data.error) {
        return { success: false, error: data.error };
      }
      return { success: true };
    } catch (e) {
      return { success: false, error: "An error occurred in the client" };
    }
  };

  return (
    <div className={styles.page}>
      <AuthForm register={true} action={register} />
    </div>
  );
};

export default RegisterPage;
