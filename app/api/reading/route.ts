import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()
  const reading = await prisma.reading.create({
    data: {
      ...data,
      startDate: `${data.startDate}T07:00:00Z`,
      endDate: `${data.endDate}T07:00:00Z`,
    },
  })

  return new NextResponse(JSON.stringify(reading), {
    headers: {
      "content-type": "application/json",
    },
  })
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")!
  const readings = await prisma.reading.findMany({
    where: {
      gardenId: id,
    },
    orderBy: {
      endDate: "asc",
    },
  })

  return new NextResponse(JSON.stringify(readings), {
    headers: {
      "content-type": "application/json",
    },
  })
}
