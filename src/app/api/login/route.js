import { NextResponse } from "next/server";
import { isAuthValid } from "@/app/lib/handleAuth";
import { jwtSign } from "@/app/lib/utils";
import { isUserInFlat, createFlat } from "@/app/lib/handleFlat";

export async function POST(req, res) {
  try {
    // Gets the content of the request
    const body = await req.json();

    // Checks for the username and email validity
    const email = body.email;
    const password = body.password;
    const res = await isAuthValid(email, password);

    // Encrypts the id to be stored in the local storage
    if (res.success) {
      let id = res.user.id;

      const encryptedId = jwtSign(id);
      res.user.id = encryptedId;
    }

    let isInFlat = await isUserInFlat(res.user.id);
    res.user.isInFlat = isInFlat.isInFlat;

    return NextResponse.json(res);
  } catch (e) {
    console.log(e)
    return NextResponse.json({
      success: false,
      error: "An error occurred in the server",
      message: e.message,
    });
  }
}
