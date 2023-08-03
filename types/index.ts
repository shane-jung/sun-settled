import {
  Prisma,
  Garden as GardenPrisma,
  Subscriber as SubscriberPrisma,
  Reading as ReadingPrisma,
  SubscriptionPlan as SubscriptionPlanPrisma,
} from "@prisma/client"

export type GardenWithRelations = Prisma.GardenGetPayload<{
  include: {
    subscribers: true
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
