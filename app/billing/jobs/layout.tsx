import { BillingJob } from "@prisma/client"
import React from "react"
import RouteLayout from "@/app/RouteLayout"
import { getBillingJobs } from "@/lib/fetchData"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans: BillingJob[] = await getBillingJobs()
  return (
    <RouteLayout items={plans} label="Billing Job" pathName="/billing/jobs/">
      {children}
    </RouteLayout>
  )
}
