import List from "@/components/List"
import { StyledLink } from "@/components/links"
import { Heading } from "@/components/typography"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import RouteLayout from "../RouteLayout"

export const metadata: Metadata = {
  title: "Community Solar Gardens",
  description: "Community Solar Billing",
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
