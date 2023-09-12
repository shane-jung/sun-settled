import { getGardens, getSubscriptionPlans } from "@/lib/fetchData"
import BillingJobForm from "./BillingJobForm"

export default async function Page() {
  const gardens = await getGardens()
  const plans = await getSubscriptionPlans()
  return <BillingJobForm gardens={gardens} plans={plans} />
}
