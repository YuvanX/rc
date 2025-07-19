import { signup } from "@/types/signupType";
import { prisma } from "@workspace/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json()

    const { email, password, username } = body

    if(!email || !password || !username) {
        return NextResponse.json({ message: "Missing input details"}, { status: 400 })
    }

    const { success } = signup.safeParse({ email, password, username })
    if(!success) return NextResponse.json({ message: "Invalid Inputs, Please provide correct details"}, { status: 400 })

    const doesUserExists = await prisma.user.findFirst({ where: { email }})

    if(doesUserExists) return NextResponse.json({ message: "User already exists with this email"}, { status: 409 })
    
    const user = await prisma.user.create({ data: { email, username, password }})

    return NextResponse.json({ message: "User created successfully!" })
}