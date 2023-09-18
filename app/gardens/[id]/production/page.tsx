import { getAllReadings } from "@/lib/readings"
import { GardenWithRelations } from "@/types"
import dynamic from "next/dynamic"

import ReadingsTable from "./ReadingsTable"

const GardenProduction = dynamic(() => import("@/components/Charts"), {
  ssr: false,
})

export default async function Page({ params }: { params: { id: string } }) {
  const readings = await getAllReadings({ gardenId: params.id })

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      {/* <GardenProduction garden={params.id} /> */}
      <h3 className="mb-2 text-xl font-medium">Production History</h3>
      <ReadingsTable readings={readings} gardenId={params.id} />
    </div>
  )
}
