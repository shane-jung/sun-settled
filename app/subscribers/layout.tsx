import { prisma } from "@/lib/prisma"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subscribers | Sun Settled",
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const subscribers = await prisma.subscriber.findMany()

  return <>{children}</>
}
