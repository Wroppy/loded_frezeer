import { NextResponse } from "next/server";
import { createUser } from "@/app/lib/handleAuth";
import { jwtSign } from "@/app/lib/utils";
import { isUserInFlat } from "@/app/lib/handleFlat";

export async function POST(req, res) {
  try {
    // Gets the content of the request
    const body = await req.json();

    // Adds the user to the database
    const name = body.name;
    const email = body.email;
    const password = body.password;

    // Creates the user
    const { success, error, id } = await createUser(name, email, password);

    // if there was an error creating the user there was a duplicate email
    if (!success) {
      return NextResponse.json({
        success: false,
        error: "Email already in use",
      });
    }

    // Checks if the user is in a flat
    let isInFlat = await isUserInFlat(id); 
    // Returns JWT token for the user
    const user = { name, id: jwtSign(id), isInFlat: isInFlat.isInFlat };

    return NextResponse.json({ success: true, user });
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: "An error occurred in the server",
    });
  }
}
