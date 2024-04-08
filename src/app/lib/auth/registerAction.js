import { postFetch } from "@/app/utils/clientFetch";

// Registers a user with the given form data
export const registerAction = async (registerData) => {
  // Returns are dealt with in the AuthForm component
  try {
    // Sends a request to the server to register the user
    let res = await postFetch("register", registerData);

    // If the request was not successful, the user is not registered
    if (!res.ok) {
      return { success: false, error: "An error occurred in the server" };
    }

    // If the request was successful, checks for an error
    const data = await res.json();
    if (!data.success) {
      return { success: false, error: data.error };
    }

    // Adds the user to the local storage
    const { name, id } = data.user;
    // Cookie with id and username
    document.cookie = `id=${id}; username=${name};`;
    document.cookie = `username=${name};`;
    document.cookie = `isInFlat=false;`;
    
    return { success: true };
  } catch (e) {
    return { success: false, error: "An error occurred in the client" };
  }
};
