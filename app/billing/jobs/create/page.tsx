import { getGardens, getSubscriptionPlans } from "@/lib/fetchData"

import BillingJobForm from "./BillingJobForm"

export default async function Page() {
  const gardens = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/gardens`
  ).then((res) => res.json())
  console.log(gardens)

  const plans = await getSubscriptionPlans()
  console.log(plans)
  return <BillingJobForm gardens={gardens} plans={plans} />
}
