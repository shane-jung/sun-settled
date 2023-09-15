import { notFound } from "next/navigation"

export async function getGardens({ include }: { include?: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/gardens?include=${include}`
  const res = await fetch(url).then((res) => {
    if (res.status === 404) return notFound()
    return res.json()
  })
  return res
}

export async function getGarden({
  id,
  include,
}: {
  id: string
  include?: boolean
}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/gardens?id=${id}&include=${include}`

  const res = await fetch(url).then((res) => {
    if (res.status === 404) return notFound()
    return res.json()
  })

  return res
}

export async function getSubscribers(props: { planId?: string }) {
  if (props) {
    const { planId } = props
    if (planId) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscribers?planId=${planId}`
      )
      return await res.json()
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subscribers`)
  return await res.json()
}

export async function getSubscriber({ id }: { id: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscribers?id=${id}`
  )
  return await res.json()
}

export async function getSubscriptionPlans() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/plans`)
  return await res.json()
}

export async function getSubscriptionPlan({ id }: { id: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/plans?id=${id}`
  )
  return await res.json()
}

export async function getBillingJobs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`)
  return await res.json()
}

export async function getBillingJob({ id }: { id: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/${id}`)
  return await res.json()
}

export async function getReadings({ id }: { id: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reading?id=${id}`
  )
  return await res.json()
}

export async function deleteReading({ id }: { id: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reading?id=${id}`,
    {
      method: "DELETE",
    }
  )
  return await res.json()
}
