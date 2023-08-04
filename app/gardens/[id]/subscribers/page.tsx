import Table, { TableBody, TableHeader } from "@/components/Table"
import { GardenWithRelations } from "@/types"

export default async function Subscribers({
  params,
}: {
  params: { id: string }
}) {
  const garden: GardenWithRelations = await fetch(
    `http://localhost:3000/api/gardens?id=${params.id}`,
    { next: { revalidate: 1 } }
  ).then((res) => res.json())

  return (
    <>
      <h2>Subscribers</h2>
      <Table>
        <TableHeader>
          <tr>
            <th>Subscriber Name</th>
            <th>Allocation (kW)</th>
          </tr>
        </TableHeader>
        <TableBody>
          {garden?.subscribers.map((subscriber, index) => (
            <tr key={index}>
              <td>{subscriber.name}</td>
              <td>{subscriber.allocation.toString()}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
