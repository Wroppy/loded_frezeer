import { signIn } from "next-auth/react";

export const login = async (email, password) => {
  // sends the name and password to the server to sign in
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res.error) {
    return { success: false, error: "Invalid Credentials" };
  }
  return { success: true};
};
