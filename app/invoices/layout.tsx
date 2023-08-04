import React from "react"
import RouteLayout from "../RouteLayout"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <RouteLayout items={[]} label="Invoice" pathName={"/invoices/"}>
      {children}
    </RouteLayout>
  )
}
