import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const data = await prisma.subscriptionPlan.findMany()
  return new NextResponse(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  })
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log(data)
  const subscriptionPlan = await prisma.subscriptionPlan.create({
    data: {
      ...data,
      isProductionDependent: Boolean(data.isProductionDependent) || false,
      isShareDependent: Boolean(data.isShareDependent) || false,
    },
  })
  return new NextResponse(JSON.stringify(subscriptionPlan), {
    headers: {
      "content-type": "application/json",
    },
  })
}
