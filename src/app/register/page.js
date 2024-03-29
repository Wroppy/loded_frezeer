"use client";

import AuthForm from "@/app/components/user-auth-form/auth-form";
import styles from "@/app/register/register.module.css";
import { postFetch } from "@/app/lib/clientFetch";
import { login } from "@/app/utils/login";

const RegisterPage = () => {
  // Registers a user with the given form data
  const register = async (registerData) => {
    // Returns are dealt with in the AuthForm component
    try {
      // Sends a request to the server to register the user
      let res = await postFetch("register", registerData);

      // If the request was not successful, the user is not registered
      if (!res.ok) {
        return { success: false, error: "An error occurred in the server" };
      }

      // If the request was successful, checks for an error
      const data = await res.json();
      if (data.error) {
        return { success: false, error: data.error };
      }

      const { email, password } = registerData;

      // If there is no error, the user is registered
      res = await login(email, password);

      if (!res.success) {
        return { success: false, error: res.error };
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
