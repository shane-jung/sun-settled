import {
  Garden as GardenPrisma,
  Prisma,
  Reading as ReadingPrisma,
  Subscriber as SubscriberPrisma,
  SubscriptionPlan as SubscriptionPlanPrisma,
} from "@prisma/client"

const gardenWithRelations = Prisma.validator<Prisma.GardenArgs>()({
  include: { subscribers: true, readings: true },
})

export type GardenWithRelations = Prisma.GardenGetPayload<
  typeof gardenWithRelations
>

export type GardenWithSubscribers = Prisma.GardenGetPayload<{
  include: {
    subscribers: true
  }
}>

export type GardenWithReadings = Prisma.GardenGetPayload<{
  include: {
    readings: true
  }
}>

export type SubscriberWithRelations = Prisma.SubscriberGetPayload<{
  include: {
    garden: true
    invoices: true
  }
}>
export type Garden = GardenPrisma
export type Subscriber = SubscriberPrisma
export type Reading = ReadingPrisma
export type SubscriptionPlan = SubscriptionPlanPrisma
