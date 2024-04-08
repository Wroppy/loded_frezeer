import { postFetch } from "@/app/utils/clientFetch";

export const logInAction = async (loginData) => {
  try {
    // gets the name and password from the form
    const { email, password } = loginData;
    const res = await postFetch("login", { email, password });

    const data = await res.json();
    if (!data.success) {
      return { success: false, error: data.error };
    }

    // Adds the user to the local storage
    const { name, id, isInFlat } = data.user;

    // Cookie with id and username
    document.cookie = `id=${id};`;
    document.cookie = `username=${name};`;
    document.cookie = `isInFlat=${isInFlat};`;

    // Sign in successful, redirects to the home page
    return { success: true };
  } catch (e) {
    return { success: false, error: "An error occurred in the client" };
  }
};
