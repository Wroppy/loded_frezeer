import AuthForm from "@/app/components/user-auth-form/auth-form";
import styles from "@/app/register/register.module.css";
import { createUser } from "@/app/lib/handleData";

const RegisterPage = () => {

  const register = async (formData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const user = await createUser(name, email, password);
    console.log(user);
  }
  return (
    <div className={styles.page}>
      <AuthForm register={true} action={register} />
    </div>
  );
};

export default RegisterPage;
