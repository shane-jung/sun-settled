import { Garden, GardenWithRelations, GardenWithSubscribers } from "@/types"
import { notFound } from "next/navigation"

import { prisma } from "./prisma"

const getAllGardens = async ({
  include,
}: {
  include?: { subscribers?: boolean; readings?: boolean }
}): Promise<GardenWithRelations[] | GardenWithSubscribers[] | Garden[]> => {
  const gardens = await prisma.garden.findMany({
    include: include || {},
  })

  return gardens as GardenWithRelations[]
}

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
  console.log(garden)
  if (!garden) return notFound()

  return garden
}

export { getGarden, getAllGardens }
