import { NextResponse } from "next/server";
import { jwtVerify } from "@/app/lib/utils";
import { createFlat, getFlatSettings } from "@/app/lib/handleFlat";
import { isUserInFlat } from "@/app/lib/handleFlat";

export async function POST(req, res) {
  try {
    // Gets the necessary inputs for creating a new flat
    const id = req.cookies.get("id").value;
    const decryptedId = jwtVerify(id);

    const result = await getFlatSettings(decryptedId);
    // console.log(JSON.stringify(result))
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred in the server",
        message: e.message,
      },
      { status: 500 }
    );
  }
}
