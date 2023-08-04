import { SubscriptionPlan } from "@prisma/client"
import { Link, StyledLink } from "@/components/links"
import { Heading } from "@/components/typography"
import Table, { TableBody, TableHeader } from "@/components/Table"
import List from "@/components/List"
import React from "react"
import RouteLayout from "@/app/RouteLayout"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans: SubscriptionPlan[] = await fetch(
    "http://localhost:3000/api/billing/plans",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json())
  console.log(plans)
  return (
    <RouteLayout
      items={plans}
      label="Subscription Plan"
      pathName="/billing/plans"
    >
      {children}
    </RouteLayout>
  )
}
