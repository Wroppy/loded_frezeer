// Returns the value of the parsed cookie
export const cookieGetter = (value) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0].trim() === value) {
      return cookie[1];
    }
  }
}