import stripe from "@/lib/stripe"
import React from "react"

import RouteLayout from "../../components/RouteLayout"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const invoices = (await stripe.invoices.list()).data
  return (
    <RouteLayout
      items={invoices.map((invoice: any) => ({
        name: invoice.customer_name,
        id: invoice.id.split("_")[1],
      }))}
      label="Invoice"
      pathName={"/invoices/"}
    >
      {children}
    </RouteLayout>
  )
}
