import { GardenProduction } from "@/components/Charts"
import DashboardPanel from "@/components/DashboardPanel"
import { getAllGardens } from "@/lib/gardens"
import { Garden, GardenWithRelations } from "@/types"
import { Badge, DonutChart, List, ListItem, Subtitle } from "@tremor/react"
import _ from "lodash"
import { Metadata } from "next"
import Link from "next/link"

import GardenOverviewTable from "./GardenOverviewTable"

export const metadata: Metadata = {
  title: "Community Solar Gardens | Sun Settled",
}

export default async function Page() {
  const gardens = await getAllGardens({
    include: { subscribers: true, readings: true },
  })

  const combinedReadings = _.chain(gardens)
    .flatMap((garden) =>
      garden.readings.map((reading) => ({
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
      <h3 className="mb-4 text-2xl">Gardens</h3>
      <Link
        href="/gardens/create"
        className="btn btn-primary absolute right-0 top-0 text-sm"
      >
        Create New Garden
      </Link>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardPanel className="col-span-2 lg:col-span-3">
          <DashboardPanel.Title>Tasks</DashboardPanel.Title>
          <DashboardPanel.Action>
            <Link href="/gardens" as={`/gardens`}>
              View All
            </Link>
          </DashboardPanel.Action>
          <DashboardPanel.Body>
            <table>
              <thead className="text-left">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Priority</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="min-w-96">
                    <p>Update Production Data</p>
                  </td>
                  <td>
                    It's been a while since you reported production data for
                    Emerge Second Chance Solar Garden. Please update the
                    production data for this garden.
                  </td>
                  <td>
                    <Badge color="red">Urgent</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Update Subscriber Records</td>
                  <td>
                    Some of your subscribers for North High Community Solar
                    Garden are set to be billed on{" "}
                    <span className="font-medium">October 1st, 2023</span>.
                    Please make sure production data and subscriber records are
                    up to date.
                  </td>
                  <td>
                    <Badge color="yellow">Medium</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </DashboardPanel.Body>
        </DashboardPanel>

        <DashboardPanel className="">
          <DashboardPanel.Title>Subscribers</DashboardPanel.Title>
          <DashboardPanel.Action>
            <Link href="/subscribers" as={`/subscribers`}>
              View All
            </Link>
          </DashboardPanel.Action>

          <DashboardPanel.Body>
            <DonutChart
              data={gardens.map((garden: Garden) => ({
                name: garden.name,
                value: garden.subscribers.length,
              }))}
              category="value"
              index="name"
            />
          </DashboardPanel.Body>
        </DashboardPanel>

        {/* <GardenOverviewTable /> */}

        <DashboardPanel className="col-span-2">
          <DashboardPanel.Title>Production</DashboardPanel.Title>
          <DashboardPanel.Body>
            {/* <div className="flex flex-col gap-6">
              <div>
                <Subtitle>Lifetime Production</Subtitle>
                <h3 className="text-3xl font-semibold">
                  {totalProduction.toLocaleString("en")} kWh
                </h3>
              </div>
              <div>
                <Subtitle>Production in Last 30 days</Subtitle>
                <h3 className="text-3xl font-semibold">
                  {productionInLastMonth.toLocaleString("en")} kWh
                </h3>
              </div>
            </div> */}
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
