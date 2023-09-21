import { prisma } from "@/lib/prisma"
import stripe from "@/lib/stripe"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()

  const stripeCustomer = await stripe.customers.create({
    name: data.name,
    email: data.email,
  })

  if (!stripeCustomer)
    return NextResponse.json({ error: "Error creating customer", status: 500 })

  const subscriber = await prisma.subscriber.create({
    data: { ...data, stripeCustomerId: stripeCustomer.id },
  })

  return NextResponse.json(subscriber)
}
