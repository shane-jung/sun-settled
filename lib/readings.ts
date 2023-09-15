import { prisma } from "./prisma"

export async function getAllReadings({ gardenId }: { gardenId: string }) {
  const readings = await prisma.reading.findMany({
    where: {
      gardenId: gardenId,
    },
  })
  return readings
}
