import List from "@/components/List"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"

import RouteLayout from "../RouteLayout"

export const metadata: Metadata = {
  title: "Subscribers | Sun Settled",
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const subscribers = await prisma.subscriber.findMany()

  return (
    <RouteLayout
      items={subscribers}
      label="Subscriber"
      pathName={"/subscribers/"}
    >
      {children}
    </RouteLayout>
  )
}
