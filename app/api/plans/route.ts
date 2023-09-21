import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()
  const res = await prisma.subscriptionPlan.create({
    data: {
      ...data,
      isShareDependent: data.isShareDependent === "true",
      isProductionDependent: data.isProductionDependent === "true",
    },
  })

  return NextResponse.json(res)
}
