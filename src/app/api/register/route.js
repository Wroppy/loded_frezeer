import { NextResponse } from "next/server";
import { createUser } from "@/app/lib/handleData";

export async function POST(req, res) {
  try {
    // Gets the content of the request
    const body = await req.json();

    // Adds the user to the database
    const name = body.name;
    const email = body.email;
    const password = body.password;

    // Creates the user
    const { success, error } = await createUser(name, email, password);

    // if there was an error creating the user there was a duplicate email
    if (!success) {
      return NextResponse.json({
        success: false,
        error: "Email already in use",
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({
      sucess: false,
      error: "An error occured in the server",
    });
  }
}
