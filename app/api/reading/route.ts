import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()

  const res = await prisma.reading.create({
    data: {
      ...data,
      startDate: `${data.startDate}T09:00:00.000Z`,
      endDate: `${data.endDate}T09:00:00.000Z`,
    },
  })
  revalidatePath("/gardens/[id]/production", "page")
  return NextResponse.json(res)
}
