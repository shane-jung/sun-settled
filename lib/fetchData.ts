export async function getGardens() {
  const res = await fetch("/api/gardens")
  return await res.json()
}

export async function getGarden({ id }: { id: string }) {
  const res = await fetch(`/api/gardens/${id}`)
  return await res.json()
}

export async function getSubscribers() {
  const res = await fetch("/api/subscribers")
  return await res.json()
}

export async function getSubscriber({ id }: { id: string }) {
  const res = await fetch(`/api/subscribers/${id}`)
  return await res.json()
}

export async function getInvoices() {
  const res = await fetch("/api/invoices")
  return await res.json()
}

export async function getInvoice({ id }: { id: string }) {
  const res = await fetch(`/api/invoices/${id}`)
  return await res.json()
}

export async function getSubscriptionPlans() {
  const res = await fetch("/api/billing/plans")
  return await res.json()
}

export async function getSubscriptionPlan({ id }: { id: string }) {
  const res = await fetch(`/api/billing/plans/${id}`)
  return await res.json()
}

export async function getBillingJobs() {
  const res = await fetch("/api/billing/jobs")
  return await res.json()
}

export async function getBillingJob({ id }: { id: string }) {
  const res = await fetch(`/api/billing/jobs/${id}`)
  return await res.json()
}
