import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  revalidatePath("/api/gardens")
  const data = await request.json()
  const garden = await prisma.garden.create({ data })
  return NextResponse.json(garden)
}
