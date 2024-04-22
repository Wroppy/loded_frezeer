import { NextResponse } from "next/server";
import { defaultMatcherConfig } from "@/app/middleware/default-matcher-config.js";
import { isProtectedRoute } from "@/app/middleware/is-protected-route";
import { jwtVerify } from "@/app/lib/utils";
import { nonAuthRedirect } from "@/app/middleware/non-auth-redirect";

export const config = {
  matcher: [...defaultMatcherConfig],
};

export function middleware(request) {

  // For layouts and assets, lets it pass
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }
  
  // Is not protected route, lets it pass
  if (!isProtectedRoute(request)) {
    return NextResponse.next();
  }


  // Is protected route, checks if user is authenticated
  const cookie = request.cookies.get("id");

  // If there is no cookie, redirects to login
  if (!cookie) {
    return nonAuthRedirect(request);
  }
  // Redirects to login if user has an invalid id
  try {
    return NextResponse.next();
  } catch (error) {
    console.log(error)
    return nonAuthRedirect(request);
  }
}
