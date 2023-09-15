import { getGardens, getSubscriptionPlans } from "@/lib/fetchData"
import { prisma } from "@/lib/prisma"

import SubscriberForm from "./SubscriberForm"

export default async function Page() {
  const gardens = await getGardens({ include: "false" })

  const subscriptionPlans = await getSubscriptionPlans()
  return (
    <div className="container">
      <SubscriberForm gardens={gardens} subscriptionPlans={subscriptionPlans} />
    </div>
  )
}
