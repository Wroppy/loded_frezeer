import AuthForm from "@/app/components/user-auth-form/auth-form";
import styles from "@/app/register/register.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.page}>
      <AuthForm register={true} />
    </div>
  );
};

export default RegisterPage;
