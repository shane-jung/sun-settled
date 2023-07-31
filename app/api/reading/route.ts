import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const reading = await prisma.reading.create({
    data: {
      ...data,
      timestamp: `${data.timestamp}T00:00:00Z`,
    },
  });

  return new NextResponse(JSON.stringify(reading), {
    headers: {
      "content-type": "application/json",
    },
  });
}
