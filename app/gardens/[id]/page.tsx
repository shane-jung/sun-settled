import {GardenProduction} from "@/components/Charts"
import DashboardPanel from "@/components/DashboardPanel"
import { getGarden } from "@/lib/gardens"
import { Garden, GardenWithRelations, Reading, Subscriber } from "@/types"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"
import GardenSubscribersTable from "./GardenSubscribersTable"

export default async function Garden({ params }: { params: { id: string } }) {
  const garden = await getGarden({
    id: params.id,
    include: { subscribers: true, readings: true },
  })
  const subscribers = garden.subscribers || []
  const readings = garden.readings || []

  return (
    <div>
      {/* <div className="mb-2 text-sm">
        <Link href="/gardens" className="link text-blue-700">
          Gardens /
        </Link>
        <span> {garden.name}</span>
      </div> */}

      <h2 className="text-2xl font-medium mb-4">{garden.name}</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <DashboardPanel className="col-span-1 lg:col-span-6">
          <DashboardPanel.Title>Overview</DashboardPanel.Title>
         <DashboardPanel.Body>
            <div className="grid grid-cols-2">
              
            </div>
         </DashboardPanel.Body>
        </DashboardPanel>
       
        <GardenSubscribersTable subscribers={subscribers} id={params.id} />

        <DashboardPanel className="col-span-1 lg:col-span-8">
          <DashboardPanel.Title>Production</DashboardPanel.Title>
          <DashboardPanel.Action>
            <Link href={`${garden.id}/production`} className="btn btn-primary btn-sm">
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
