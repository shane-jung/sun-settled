import {GardenProduction} from "@/components/Charts"
import DashboardPanel from "@/components/DashboardPanel"
import { getGarden } from "@/lib/gardens"
import { Garden, GardenWithRelations, Reading, Subscriber } from "@/types"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"

export default async function Garden({ params }: { params: { id: string } }) {
  const garden = await getGarden({
    id: params.id,
    include: { subscribers: true, readings: true },
  })
  const subscribers = garden.subscribers || []
  const readings = garden.readings || []

  return (
    <div>
      <div className="mb-2 text-sm">
        <Link href="/gardens" className="link text-blue-700">
          Gardens /
        </Link>
        <span> {garden?.name}</span>
      </div>

      <h2 className="mb-4 text-2xl">{garden?.name}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DashboardPanel>
          <DashboardPanel.Title>General</DashboardPanel.Title>
         <DashboardPanel.Body>
            <div className="flex">
              <h4 className="wrap text-center text-3xl">
                {garden?.capacityDc?.toString()}
                <br />
                kW
              </h4>

            </div>
         </DashboardPanel.Body>
        </DashboardPanel>
        <DashboardPanel>
          <DashboardPanel.Title>Subscribers</DashboardPanel.Title>
          <DashboardPanel.Action>
            <Link
              href="/gardens/[id]/subscribers"
              as={`/gardens/${params.id}/subscribers`}
              className="link"
            >
              View All
            </Link>
            </DashboardPanel.Action>
            
            
          <DashboardPanel.Body>
            <table>
              <thead className="text-left">
                <tr>
                  <th>Subscriber Name</th>
                  <th>Allocation (kW)</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {subscribers?.map((subscriber: Subscriber) => (
                  <tr>
                    <td>
                      <Link
                        href={`/subscribers/${subscriber.id}`}
                        className="link "
                      >
                        {subscriber.name}
                      </Link>
                    </td>
                    <td>{subscriber.allocation.toString()}</td>
                    <td>
                      <Link
                        href={`/subscribers/${subscriber.id}`}
                        className="link"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DashboardPanel.Body>
        </DashboardPanel>

        <DashboardPanel className="col-span-2">
          <DashboardPanel.Title>Production</DashboardPanel.Title>
          <DashboardPanel.Action>
            <Link href={`${garden.id}/production`} className="btn btn-primary text-sm">
              Add Reading
            </Link>
          </DashboardPanel.Action>
                  <DashboardPanel.Body>
          <GardenProduction
            readings={readings.map((reading: Reading) => ({
              name: new Date(reading.startDate).toLocaleString("default", {
                month: "short",
              }),
              value: reading.value,
            }))}
            categories={ ["value"] }
            />
          </DashboardPanel.Body>
        </DashboardPanel>

      </div>
    </div>
  )
}
