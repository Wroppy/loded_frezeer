import { NextResponse } from "next/server";

export const nonAuthRedirect = (request) => {
  return NextResponse.redirect(new URL('/login', request.url))
}