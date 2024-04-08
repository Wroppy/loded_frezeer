import { NextResponse } from "next/server";
import { jwtVerify } from "@/app/lib/utils";
import { createFlat } from "@/app/lib/handleFlat";

export async function POST(req, res) {
  try {
    // Gets the nessesary inputs for creating a new flat
    const id = req.cookies.get("id").value;
    const decryptedId = jwtVerify(id);
    const flatName = (await req.json()).flatName;

    const result = createFlat(decryptedId, flatName);
    if (result.success) {

    
      return NextResponse.json({success: true});
    }

    return NextResponse.json({error: result.error}, { status: 401 });
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
