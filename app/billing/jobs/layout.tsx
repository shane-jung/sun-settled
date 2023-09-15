import RouteLayout from "@/components/RouteLayout"
import { getAllBillingJobs } from "@/lib/jobs"
import { BillingJob } from "@prisma/client"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans: BillingJob[] = await getAllBillingJobs()
  return (
    <RouteLayout items={plans} label="Billing Job" pathName="/billing/jobs/">
      {children}
    </RouteLayout>
  )
}
