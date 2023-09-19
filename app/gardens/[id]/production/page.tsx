import { getAllReadings } from "@/lib/readings"

import ReadingsTable from "./ReadingsTable"

export default async function Page({ params }: { params: { id: string } }) {
  const readings = await getAllReadings({ gardenId: params.id })

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="mb-2 text-xl font-medium">Production History</h3>
      <ReadingsTable readings={readings} gardenId={params.id} />
    </div>
  )
}
