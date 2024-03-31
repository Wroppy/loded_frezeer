export const isProtectedRoute = (request) => {
  const url = request.nextUrl.pathname;

  // Login and register routes are not protected
  if (url.startsWith("/login") || url.startsWith("/register")) {
    return false;
  }


  // api login and register routes are protected
  if (url.startsWith("/api/login") || url.startsWith("/api/register")) {
    return false;
  }

  return true;
};