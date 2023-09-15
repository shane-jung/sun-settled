import RouteLayout from "@/components/RouteLayout"
import { getSubscriptionPlans } from "@/lib/fetchData"
import { SubscriptionPlan } from "@prisma/client"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans: SubscriptionPlan[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/plans`,
    {
      next: {
        tags: ["plans"],
      },
    }
  ).then((res) => res.json())
  return (
    <RouteLayout
      items={plans}
      label="Subscription Plan"
      pathName="/billing/plans/"
    >
      {children}
    </RouteLayout>
  )
}
