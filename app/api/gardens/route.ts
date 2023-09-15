import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  const include = request.nextUrl.searchParams.get("include")
    ? { subscribers: true, readings: true }
    : undefined

  let gardens

  if (id)
    gardens = await prisma.garden.findUnique({
      where: {
        id: id,
      },
      include: include,
    })
  else
    gardens = await prisma.garden.findMany({
      include: include,
    })

  if (gardens) return NextResponse.json(gardens)
  else return NextResponse.json({ error: "No gardens found", status: 404 })
}

export async function POST(request: NextRequest) {
  revalidatePath("/api/gardens")
  const data = await request.json()
  const garden = await prisma.garden.create({ data })
  return NextResponse.json(garden)
}
