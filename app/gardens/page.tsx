import { GardenProduction } from "@/components/Charts"
import DashboardPanel from "@/components/DashboardPanel"
import { getAllGardens } from "@/lib/gardens"
import _ from "lodash"
import { Metadata } from "next"
import Link from "next/link"

import GardenOverviewTable from "./GardenOverviewTable"
import GardenTasks from "./GardenTasks"

export const metadata: Metadata = {
  title: "Community Solar Gardens | Sun Settled",
}

export default async function Page() {
  const gardens = await getAllGardens({
    include: { subscribers: true, readings: true },
  })

  const combinedReadings = _.chain(gardens)
    .flatMap((garden) =>
      garden.readings.map((reading: any) => ({
        date: new Date(reading.endDate),
        [garden.name]: reading.value,
      }))
    )
    .groupBy("date")
    .sortBy("date")
    .map((group) =>
      group.reduce((result, item) => {
        Object.assign(result, item)
        return result
      }, {})
    )
    .value()

  const readings = _.sortBy(combinedReadings, ["date"]).map((reading) => ({
    ...reading,
    date: reading.date.toLocaleString("default", { month: "short" }),
  }))

  return (
    <div className="relative">
      <h2 className="text-2xl font-medium mb-4">Gardens</h2>
      <Link
        href="/gardens/create"
        className="btn btn-sm btn-primary absolute right-0 top-0"
      >
        Create New Garden
      </Link>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 ">
        <GardenTasks />
        <GardenOverviewTable />

        <DashboardPanel className="col-span-1 lg:col-span-8">
          <DashboardPanel.Title>Production</DashboardPanel.Title>
          <DashboardPanel.Body>
            <GardenProduction
              readings={readings}
              categories={gardens.map((garden: any) => garden.name)}
            />
          </DashboardPanel.Body>
        </DashboardPanel>
      </div>
    </div>
  )
}
