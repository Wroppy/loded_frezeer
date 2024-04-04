"use client";

// Returns the value of the parsed cookie
export const cookieGetter = (value) => {
  try {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0].trim() === value) {
        return cookie[1];
      }
    }
  } catch (error) {
    return null;
  }
};
