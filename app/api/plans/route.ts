import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  let data

  if (id)
    data = await prisma.subscriptionPlan.findUnique({
      where: {
        id: id,
      },
    })
  else {
    data = await prisma.subscriptionPlan.findMany()
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const subscriptionPlan = await prisma.subscriptionPlan.create({
    data: {
      ...data,
      isProductionDependent: Boolean(data.isProductionDependent) || false,
      isShareDependent: Boolean(data.isShareDependent) || false,
    },
  })

  return NextResponse.json(subscriptionPlan)
}
