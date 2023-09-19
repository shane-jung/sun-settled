import { getAllBillingJobs } from "@/lib/jobs"
import { BillingJob } from "@prisma/client"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const plans: BillingJob[] = await getAllBillingJobs()
  return <>{children}</>
}
