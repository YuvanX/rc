import { signup } from "@/types/signupType";
import { prisma } from "@workspace/db/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, username } = body;

  if (!email || !password || !username)
    return NextResponse.json(
      { message: "Please provide details" },
      { status: 400 }
    );

  try {
    const { success } = signup.safeParse({ email, password, username });
    if (!success) return NextResponse.json({ message: "Invalid Inputs" }, { status: 400 });

    const doesUserExists = await prisma.user.findFirst({ where: email });
    if (doesUserExists) return NextResponse.json({ message: "Already user with this email exists." },{ status: 410 });

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: { email, username, password: hashedPassword },
    });

    return NextResponse.json({ message: "User created Successfully!" });
  } catch (error) {
    return NextResponse.json("Something went wrong. Please try again later")
  }
}
