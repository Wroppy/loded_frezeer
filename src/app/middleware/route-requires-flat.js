import { NextResponse } from "next/server";

export const redirectToSettings = (request) => {
  return NextResponse.redirect(new URL("/settings", request.url));
};

export const routeRequiresFlat = (request) => {
  const url = request.nextUrl.pathname;

  // create, join flat and settings are not required
  if (url.startsWith("/create-flat") || url.startsWith("/get-flat-settings")) {
    return false;
  }

  if (url.startsWith("/join-flat")) {
    return false;
  }

  return true;
};
