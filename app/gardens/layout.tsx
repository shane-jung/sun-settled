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
  const gardens: Garden[] = await fetch("http://localhost:3000/api/gardens", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())

  return (
    <RouteLayout items={gardens} label="Garden" pathName={"/gardens/"}>
      {children}
    </RouteLayout>
  )
}
