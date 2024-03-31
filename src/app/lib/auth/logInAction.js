import { login } from "@/app/lib/auth/login";

export const logInAction = async (loginData) => {
  try {
    // gets the name and password from the form
    const { email, password } = loginData;

    const res = await login(email, password);
    if (!res.success) {
      return { success: false, error: res.error };
    }

    // Sign in successful, redirects to the home page
    return { success: true };
  } catch (e) {
    return { success: false, error: "An error occurred in the client" };
  }
};
