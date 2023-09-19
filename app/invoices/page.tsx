import DashboardPanel from "@/components/DashboardPanel"
import { getAllInvoices } from "@/lib/invoices"
import stripe from "@/lib/stripe"
import Link from "next/link"
import React from "react"

export default async function Page() {
  const invoices = await getAllInvoices()
  // console.log(invoices)
  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Invoices</h2>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <DashboardPanel className="col-span-1 lg:col-span-12">
          <DashboardPanel.Title>Overview</DashboardPanel.Title>
          <DashboardPanel.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Invoice Number</th>
                  <th>Subscriber</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {invoices.data.map((invoice: any) => (
                  <tr key={invoice.id}>
                    <td>
                      <Link href={`/invoices/${invoice.id.split("_")[1]}`}>
                        {invoice.id}
                      </Link>
                    </td>
                    <td>{invoice.customer_name}</td>
                    <td>${invoice.amount_due / 100}</td>
                    <td>{invoice.status}</td>
                    <td>
                      <a href={`/invoices/${invoice.id.split("_")[1]}`}>
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DashboardPanel.Body>
        </DashboardPanel>
      </div>
    </div>
  )
}
