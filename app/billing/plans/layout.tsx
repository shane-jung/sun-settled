import { SubscriptionPlan } from "@prisma/client"
import React from "react"
import RouteLayout from "@/app/RouteLayout"
import { getSubscriptionPlans } from "@/lib/fetchData"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans: SubscriptionPlan[] = await getSubscriptionPlans()
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
