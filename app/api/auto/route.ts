import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ st: 1 });
  } catch {
    return new NextResponse("Something went wrong", { status: 502 });
  }
};
