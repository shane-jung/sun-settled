import { GardenWithRelations } from "@/types"
import dynamic from "next/dynamic"

import ReadingsTable from "./ReadingsTable"

const GardenProduction = dynamic(
  () => import("@/components/GardenProduction"),
  { ssr: false }
)

export default async function Page({ params }: { params: { id: string } }) {
  const readings = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reading?id=${params.id}`
  ).then((res) => res.json())

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      {/* <GardenProduction garden={params.id} /> */}
      <h3 className="mb-2 text-xl font-medium">Production</h3>
      <ReadingsTable readings={readings} gardenId={params.id} />
    </div>
  )
}
