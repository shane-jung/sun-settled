import { getAllGardens } from "@/lib/gardens"
import { getAllSubscriptionPlans } from "@/lib/plans"
import { Garden, GardenWithRelations } from "@/types"

import SubscriberForm from "./SubscriberForm"

const CreateSubscriberPage = async () => {
  const gardens = await getAllGardens({
    include: {},
  })
  const subscriptionPlans = await getAllSubscriptionPlans()

  return (
    <div className="container">
      <SubscriberForm gardens={gardens} subscriptionPlans={subscriptionPlans} />
    </div>
  )
}

export default CreateSubscriberPage
