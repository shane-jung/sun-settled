import DashboardPanel from "@/components/DashboardPanel"
import stripe from "@/lib/stripe"
import Link from "next/link"

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const invoice = await stripe.invoices.retrieve(`in_${id}`)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Invoice</h2>
      <DashboardPanel>
        <DashboardPanel.Title>Details</DashboardPanel.Title>
        <DashboardPanel.Body>
          <p>Subscriber Name</p>
          <Link href="/subscribers">{invoice.customer_name}</Link>
          <p>{invoice.customer_email}</p>
          <h3 className="text-4xl">${(invoice.amount_due / 100).toFixed(2)}</h3>
          <p>Invoice Status</p>
          <p>{invoice.status}</p>
          {invoice.lines.data.map((line: any) => (
            <div>
              <p>{line.description}</p>
              <p>${(line.amount / 100).toFixed(2)}</p>
            </div>
          ))}
        </DashboardPanel.Body>
      </DashboardPanel>
      <button className="btn btn-error">Finalize and Send </button>
    </div>
  )
}
