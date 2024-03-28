import { NextResponse } from "next/server";
import { isAuthValid } from "@/app/lib/handleData";

export async function POST(req, res) {
  try {
    // Gets the content of the request
    const body = await req.json();

    // Checks for the username and email in the request
    const email = body.email;
    const password = body.password;

    const res = await isAuthValid(email, password);

    return NextResponse.json(res);

  } catch (e) {
    return NextResponse.json({
      success: false,
      error: "An error occurred in the server",
      message: e.message
    });
  }
}
