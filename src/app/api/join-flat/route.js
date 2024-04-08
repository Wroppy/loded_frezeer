import { NextResponse } from "next/server";
import { jwtVerify } from "@/app/lib/utils";
import { joinFlat } from "@/app/lib/handleFlat";
import { isUserInFlat } from "@/app/lib/handleFlat";

export async function POST(req, res) {
  try {
    // Gets the necessary inputs for creating a new flat
    const id = req.cookies.get("id").value;
    const decryptedId = jwtVerify(id);
    const joinId = (await req.json()).joinId;

    // Checks if the user is already in a flat
    if ((await isUserInFlat(id)).isInFlat) {
      return NextResponse.json(
        { success: false, error: "User is already in a flat" },
        { status: 401 }
      );
    }

    const result = await joinFlat(decryptedId, joinId);
    if (result.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: result.error }, { status: 401 });
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
