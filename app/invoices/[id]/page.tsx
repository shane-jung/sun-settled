import stripe from "@/lib/stripe"

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const invoice = await stripe.invoices.retrieve(`in_${id}`)
  console.dir(invoice)
  return (
    <div>
      <h1 className="text-2xl">Invoice</h1>
      <p className="font-bold">Customer Details</p>
      <p>{invoice.customer_name}</p>
      <p>{invoice.customer_email}</p>
      <p>${invoice.amount_due / 100}</p>
      <p>{invoice.status}</p>
      {invoice.lines.data.map((line: any) => (
        <div>
          <p>{line.description}</p>
          <p>${line.amount / 100}</p>
        </div>
      ))}
      <button>Finalize and Send </button>
    </div>
  )
}
