import { prisma } from "./prisma"

const getAllSubscriptionPlans = async () => {
  const plans = await prisma.subscriptionPlan.findMany()
  return plans
}

const getSubscriptionPlan = async ({ id }: { id: string }) => {
  const plan = await prisma.subscriptionPlan.findUnique({
    where: {
      id: id,
    },
  })
  return plan
}

export { getAllSubscriptionPlans, getSubscriptionPlan }
