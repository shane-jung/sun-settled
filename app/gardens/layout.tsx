import { getAllGardens } from "@/lib/gardens"
import { Garden } from "@prisma/client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Solar Gardens | Sun Settled",
  description: "Community Solar Billing",
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const gardens: Garden[] = await getAllGardens({ include: {} })

  return <>{children}</>
}
