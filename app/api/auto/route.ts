import axios from "axios";
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
      isDamaged,
      isAbroad,
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
      isTradable,
      description,
    } = body;
    let errors = { ...body };
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
        status: 0,
        errors,
      });
    }
    console.log(body);
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/auto",
      data: {
        ...body,
      },
    });
    if (response.data.status === 0) {
      isErrors = true;
      response.data.errors.forEach((error: string) => {
        errors[error] = true;
      });
      return NextResponse.json({ errors, status: 0 });
    }
    return NextResponse.json({ status: 1 });
  } catch {
    return new NextResponse("Something went wrong", { status: 502 });
  }
};
