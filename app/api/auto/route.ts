import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    return NextResponse.json(data.data);
  } catch {
    return new NextResponse("Something went wrong", { status: 502 });
  }
};
