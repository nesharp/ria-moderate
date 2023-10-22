import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { object } from "zod";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    let isErrors = false;
    const {
      gearbox,
      drive,
      IsDamaged,
      IsAbroad,
      price,
      currency,
      brand,
      model,
      year,
      run,
      engineType,
      engineCP,
      colour,
      city,
      IsTradable,
      description,
    } = body;
    let errors = body;
    Object.keys(body).forEach((key) => {
      if (body[key] === null) {
        isErrors = true;
        errors[key] = true;
      } else {
        errors[key] = false;
      }
    });
    if (isErrors) {
      return NextResponse.json({
        st: 0,
        errors,
      });
    }
    return NextResponse.json({
      st: 0,
      errors: {
        gearbox: true,
      },
    });
  } catch {
    return new NextResponse("Something went wrong", { status: 502 });
  }
};
