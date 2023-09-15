import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()
  const reading = await prisma.reading
    .create({
      data: {
        ...data,
        startDate: `${data.startDate}T07:00:00Z`,
        endDate: `${data.endDate}T07:00:00Z`,
      },
    })
    .then((res) => {
      if (!res)
        return {
          error: "Error posting reading",
          status: 500,
        }
      else return res
    })

  return NextResponse.json(reading)
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

  return NextResponse.json(readings)
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")!
  const res = await prisma.reading.delete({
    where: {
      id: id,
    },
  })
  return NextResponse.json(res)
}
