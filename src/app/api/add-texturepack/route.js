import prisma from "@/server/prisma"
import { NextResponse } from "next/server"

export async function POST(request) {
    const res = await request.json()
    const {name} = res;
    console.log({res})

    const result = await prisma.texturepacks.create({
        data: {
            name
        }
    })
    return NextResponse.json({result})
}