import { getAllGardens } from "@/lib/gardens"
import { Garden } from "@prisma/client"
import { Metadata } from "next"

import RouteLayout from "../../components/RouteLayout"

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

  return (
    <RouteLayout items={gardens} label="Garden" pathName={"/gardens/"}>
      {children}
    </RouteLayout>
  )
}
