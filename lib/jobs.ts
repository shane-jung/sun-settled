import { prisma } from "./prisma"

const getAllBillingJobs = async () => {
  const jobs = await prisma.billingJob.findMany()
  return jobs
}

const getBillingJob = async ({ id }: { id: string }) => {
  const job = await prisma.billingJob.findUnique({
    where: {
      id: id,
    },
  })
  return job
}

export { getAllBillingJobs, getBillingJob }
