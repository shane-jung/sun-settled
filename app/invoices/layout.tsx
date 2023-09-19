import stripe from "@/lib/stripe"
import React from "react"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  // const invoices = (await stripe.invoices.list()).data
  return <>{children}</>
}
