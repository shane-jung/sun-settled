import Navigation from "@/components/Navigation"
import stripe from "@/lib/stripe"
import React from "react"

export default async function Page() {
  const invoices = await stripe.invoices.list()
  console.log(invoices)
  return <></>
}
