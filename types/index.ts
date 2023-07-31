import {Prisma, Garden as GardenPrisma, Subscriber as SubscriberPrisma, Reading as ReadingPrisma,} from '@prisma/client'

export type GardenWithRelations = Prisma.GardenGetPayload<{
    include: {
        subscribers: true
        readings: true
    }
}>
export type Garden = GardenPrisma;
export type Subscriber = SubscriberPrisma;
export type Reading = ReadingPrisma;
