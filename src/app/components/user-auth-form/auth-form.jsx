"use client";
// Auth form can either be a register or a login form
// IF it is a register form, it will have a name field

import { Button, TextField } from "@mui/material";
import styles from "@/app/components/user-auth-form/auth-form.module.css";
import Link from "next/link";
import AuthFormFields from "@/app/components/user-auth-form/auth-form-fields";


const AuthForm = ({ register = false, action }) => {
  
  const submitForm = async (e) => {
    e.preventDefault(); // Stops reload

    // Gets the form data and converts it to an object
    const formData = Object.fromEntries(new FormData(e.target).entries());
  
    const {success, error} = await action(formData); 
    
    console.log(success, error);
      
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.formTitle}>{register ? "Register" : "Login"}</div>
      <div className={styles.formInputs}>
        <AuthFormFields register={register} />
      </div>
      <div className={styles.formFooter}>
        <div className={styles.formFooterText}>
          {register ? "Already have an account?" : "Don't have an account?"}
          <Link className={styles.formLink} href={register ? "/login" : "/register"}>
            {register ? " Login" : " Register"}
          </Link>
        </div>

        <Button type="submit" variant="outlined">{register ? "Register" : "Login"}</Button>
      </div>
    </form>
  );
};

export default AuthForm;
