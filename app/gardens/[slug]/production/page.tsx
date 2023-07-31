import dynamic from "next/dynamic"
const GardenProduction = dynamic(
  () => import("@/components/GardenProduction"),
  { ssr: false }
)
import ReadingForm from "./ReadingForm"
import { GardenWithRelations } from "@/types"

export default async function Page({ params }: { params: { slug: string } }) {
  const garden: GardenWithRelations = await fetch(
    `http://localhost:3000/api/gardens?slug=${params.slug}`
  ).then((res) => res.json())

  return (
    <>
      <h2>Garden Production History</h2>

      <GardenProduction garden={garden} />
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Reading (kWh)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {garden?.readings.map((reading, index) => (
            <tr key={index}>
              <td>{reading.value.toString()}</td>
              <td>
                {reading.timestamp.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReadingForm gardenId={garden?.id!} />
    </>
  )
}
