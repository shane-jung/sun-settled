import { prisma } from "@/lib/prisma"
import stripe from "@/lib/stripe"
import { revalidatePath } from "next/cache"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  //get the search params from the request
  let subscribers
  if (request.nextUrl.searchParams.get("id"))
    subscribers = await prisma.subscriber.findUnique({
      where: {
        id: request.nextUrl.searchParams.get("id")!,
      },
    })
  else subscribers = await prisma.subscriber.findMany()

  console.log(subscribers)
  return new NextResponse(JSON.stringify(subscribers), {
    headers: {
      "content-type": "application/json",
    },
  })
}

export async function PUT(request: Request) {
  const data = await request.json()
  console.log(data)
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

export async function POST(request: Request) {
  revalidatePath("http://localhost:3000/api/subscribers")

  const data = await request.json()

  const stripeCustomer = await stripe.customers.create({
    name: data.name,
    email: data.email,
  })
  if (!stripeCustomer)
    return new NextResponse(
      JSON.stringify({ error: "stripe customer not created" })
    )
  console.log(stripeCustomer)
  const subscriber = await prisma.subscriber.create({
    data: { ...data, stripeCustomerId: stripeCustomer.id },
  })

  return new NextResponse(JSON.stringify(subscriber), {
    headers: {
      "content-type": "application/json",
    },
  })
}
