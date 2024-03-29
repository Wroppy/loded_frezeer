"use client";
// Auth form can either be a register or a login form
// IF it is a register form, it will have a name field

import { Button, CircularProgress, TextField } from "@mui/material";
import styles from "@/app/components/user-auth-form/auth-form.module.css";
import Link from "next/link";
import AuthFormFields from "@/app/components/user-auth-form/auth-form-fields";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ register = false, action }) => {
  // Error for the form
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault(); // Stops reload

    // Gets the form data and converts it to an object
    const formData = Object.fromEntries(new FormData(e.target).entries());

    // Disables the button and sets the loading state
    setLoading(true);

    const { success, error } = await action(formData);

    // Enables the button and sets the loading state
    setLoading(false);

    if (!success) {
      setError(error);
      return;
    }

    // Redirects to the home page
    router.push("/");
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.formTitle}>{register ? "Register" : "Login"}</div>
      <div className={styles.formInputs}>
        <AuthFormFields register={register} />
      </div>
      <div className={styles.formFooter}>
        <div className={styles.formFooterText}>
          {register ? "Already have an account? " : "Don't have an account? "}
          <Link
            className={styles.formLink}
            href={register ? "/login" : "/register"}
          >
            {register ? "Login" : "Register"}
          </Link>
        </div>
        <div className={styles.authSubmit}>
          {loading && <CircularProgress size={24} />}

          <Button disabled={loading} type="submit" variant="outlined">
            {register ? "Register" : "Login"}
          </Button>
        </div>
      </div>
      <div className={styles.error}>{error}</div>
    </form>
  );
};

export default AuthForm;
