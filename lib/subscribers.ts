import { prisma } from "./prisma"

const getAllSubscribers = async () => {
  const subscribers = await prisma.subscriber.findMany()
  return subscribers
}

const getSubscriber = async ({ id }: { id: string }) => {
  const subscriber = await prisma.subscriber.findUnique({
    where: {
      id: id,
    },
  })
  return subscriber
}

const getSubscribersOnPlan = async ({ id }: { id: string }) => {
  const subscribers = await prisma.subscriber.findMany({
    where: {
      subscriptionPlanId: id,
    },
  })
  return subscribers
}

export { getAllSubscribers, getSubscriber }
