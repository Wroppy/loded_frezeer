import styles from "@/app/login/login.module.css";
import AuthForm from "@/app/components/user-auth-form/auth-form";
import { getUsers } from "../lib/handleData";
import { revalidatePath } from "next/cache";
const LoginPage = () => {
  const login = async () => {
    "use server";
    const response = await getUsers();
    if (!response.success) {
      return { error: response.error };
    }

    
  };

  return (
    <div className={styles.loginPage}>
      <AuthForm action={login} />
    </div>
  );
};

export default LoginPage;
