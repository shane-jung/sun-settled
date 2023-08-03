import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  //get the search params from the request\
  let gardens
  if (request.nextUrl.searchParams.get("slug"))
    gardens = await prisma.garden.findUnique({
      where: {
        slug: request.nextUrl.searchParams.get("slug")!,
      },
      include: {
        readings: true,
        subscribers: true,
      },
    })
  else gardens = await prisma.garden.findMany()

  return new NextResponse(JSON.stringify(gardens), {
    headers: {
      "content-type": "application/json",
    },
  })
}

export async function PUT(request: NextRequest) {
  const data = await request.json()
  return new NextResponse(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  })
  const garden = await prisma.garden.update({
    where: {
      id: data.id,
    },
    data,
  })
}

export async function POST(request: NextRequest) {
  revalidatePath("http://localhost:3000/api/gardens")
  const data = await request.json()
  const garden = await prisma.garden.create({
    data: {
      ...data,
      slug: data.name.toLowerCase().replace(/ /g, "-"),
    },
  })
  return new NextResponse(JSON.stringify(garden), {
    headers: {
      "content-type": "application/json",
    },
  })
}
