import { getAllSubscriptionPlans } from "@/lib/plans"
import { SubscriptionPlan } from "@prisma/client"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans = await getAllSubscriptionPlans()
  return <>{children}</>
}
