import { getSubscriber } from "@/lib/fetchData"
import stripe from "@/lib/stripe"

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  // console.log(id)
  const subscriber = await getSubscriber({ id })
  console.log(subscriber.stripeCustomerId)
  const invoices = await stripe.invoices.list({
    customer: subscriber.stripeCustomerId,
  })

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.data.map((invoice: any) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>${(invoice.amount_due / 100).toLocaleString("en-US")}</td>
              <td>{invoice.status.toUpperCase()}</td>
              <td>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
