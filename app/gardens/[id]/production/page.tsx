import dynamic from "next/dynamic"
const GardenProduction = dynamic(
  () => import("@/components/GardenProduction"),
  { ssr: false }
)
import ReadingForm from "./ReadingForm"
import { GardenWithRelations } from "@/types"
import Table, { TableBody, TableHeader } from "@/components/Table"

export default async function Page({ params }: { params: { id: string } }) {
  const garden: GardenWithRelations = await fetch(
    `http://localhost:3000/api/gardens?id=${params.id}`
  ).then((res) => res.json())

  return (
    <>
      <GardenProduction garden={garden} />
      <Table>
        <TableHeader>
          <tr>
            <th>Reading (kWh)</th>
            <th>Date</th>
          </tr>
        </TableHeader>
        <TableBody>
          {garden?.readings.map((reading, index) => (
            <tr key={index}>
              <td>{new Number(reading.value).toLocaleString("en-US")}</td>
              <td>
                {new Date(reading.timestamp).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                  day: "numeric",
                })}
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
      <ReadingForm gardenId={garden?.id!} />
    </>
  )
}
