import { Garden, GardenWithRelations, GardenWithSubscribers } from "@/types"
import { notFound } from "next/navigation"
import { cache } from "react"

import { prisma } from "./prisma"

export const revalidate = 1
const getAllGardens = cache(
  async ({
    include,
  }: {
    include: { subscribers?: boolean; readings?: boolean }
  }): Promise<any> => {
    const gardens = await prisma.garden.findMany({
      include: { subscribers: include.subscribers, readings: include.readings },
    })

    return gardens
  }
)

const getGarden = async ({
  id,
  include,
}: {
  id: string
  include?: { subscribers?: boolean; readings?: boolean }
}) => {
  const garden = await prisma.garden.findUnique({
    where: {
      id: id,
    },
    include: include || {},
  })
  if (!garden) return notFound()

  return garden
}

export { getGarden, getAllGardens }
