import { getAllGardens } from "@/lib/gardens"
import { getAllSubscriptionPlans } from "@/lib/plans"

import BillingJobForm from "./BillingJobForm"

export default async function Page() {
  const gardens = await getAllGardens({
    include: {},
  })
  const plans = await getAllSubscriptionPlans()
  return <BillingJobForm gardens={gardens} plans={plans} />
}
