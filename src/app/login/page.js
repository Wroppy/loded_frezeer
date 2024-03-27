import styles from "@/app/login/login.module.css";
import AuthForm from "@/app/components/user-auth-form/auth-form";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
