import stripe from "./stripe"

const getInvoice = async (invoiceId: string) => {
  const invoice = await stripe.invoices.retrieve(invoiceId)
  return invoice
}

const getInvoicesForCustomer = async (customerId: string) => {
  const invoices = await stripe.invoices.list({
    customer: customerId,
  })
  return invoices
}

const getAllInvoices = async () => {
  const invoices = await stripe.invoices.list()
  console.log(invoices)
  return invoices
}

export { getInvoice, getInvoicesForCustomer, getAllInvoices }
