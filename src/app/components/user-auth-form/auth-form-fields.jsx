import { TextField } from "@mui/material";
import styles from "@/app/components/user-auth-form/auth-form.module.css";

const AuthInputFields = ({ register }) => {
  return (
    <>
      {register && (
        <TextField
          required
          className={styles.authInput}
          size="small"
          type="text"
          placeholder="Name"
          label="Name"
        />
      )}
      <TextField
        required
        size="small"
        label={"Email"}
        type="email"
        placeholder="Email"
        className={styles.authInput}
      />
      <TextField
        required
        className={styles.authInput}
        size="small"
        label={"Password"}
        type="password"
        placeholder="Password"
      />
    </>
  );
};

export default AuthInputFields;
