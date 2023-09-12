export async function getGardens() {
  const res = await fetch("http://localhost:3000/api/gardens")
  return await res.json()
}

export async function getGarden({ id }: { id: string }) {
  const res = await fetch(`http://localhost:3000/api/gardens?id=${id}`)
  return await res.json()
}

export async function getSubscribers() {
  const res = await fetch("/api/subscribers")
  return await res.json()
}

export async function getSubscriber({ id }: { id: string }) {
  const res = await fetch(`http://localhost:3000/api/subscribers?id=${id}`)
  return await res.json()
}

export async function getSubscriptionPlans() {
  const res = await fetch("http://localhost:3000/api/billing/plans")
  return await res.json()
}

export async function getSubscriptionPlan({ id }: { id: string }) {
  const res = await fetch(`http://localhost:3000/api/billing/plans/${id}`)
  return await res.json()
}

export async function getBillingJobs() {
  const res = await fetch("http://localhost:3000/api/billing/jobs")
  return await res.json()
}

export async function getBillingJob({ id }: { id: string }) {
  const res = await fetch(`http://localhost:3000/api/billing/jobs/${id}`)
  return await res.json()
}
